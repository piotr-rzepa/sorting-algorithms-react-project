/*
 * Komponent bezklasowy będący stroną z informacjami o poszczególnym algorytmie
 */

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import CardBig from './CardBig';
import ChartLine from './ChartLine';
import ChartVisualize from './ChartVisualize';
import SettingsModal from './SettingsModal';
import { ReactComponent as PlusSVG } from '../images/plus.svg';
import { ReactComponent as EditSVG } from '../images/edit.svg';
import InfoSVG from '../images/info.svg';
import PercentSVG from '../images/percent.svg';
import RefreshSVG from '../images/refresh.svg';
import ClockSVG from '../images/clock.svg';
import TrophySVG from '../images/trophy.svg';
import IncreaseSVG from '../images/increase.svg';
import { evaluateResults } from '../sortingImpl/sortManager';
import { useDispatch } from 'react-redux';
import { setSortingTime } from '../actions/sorting';
import numeral from 'numeral';
import worker from 'workerize-loader?inline!../workers/worker';
import { selectSortedPositions } from '../selectors/sortingSelector';
import { ThemeContext } from './ThemeContext';
import { styleMain } from '../styles/styles';
//* Obiekt match zawiera informację o ścieżce, parametrach, (w tym nazwę algorytmu który chcemy wyświetlić)
export default function AlgorithmPage({ match }) {
	// Pobieranie motywu [jasny/ciemny]
	const darkTheme = useContext(ThemeContext);

	//Ustawianie motywu w zależności od kontekstu
	const currentStyle = darkTheme ? styleMain.darkStyle : styleMain.lightStyle;
	//* State naszego workera
	const [instance, setInstance] = useState(undefined);
	const [canRun, setCanRun] = useState({
		computation: true,
		visualization: true
	});

	//* Tylko przy montowaniu komponentu tworzymy workera, przy unmount usuwamy go
	useEffect(() => {
		setInstance(new worker());
		return () => setInstance(undefined);
	}, []);

	//* Tworzenie losowych danych do wizualizacji
	let test = Array.from({ length: 150 }, () => Math.floor(Math.random() * 100));

	//* Obiekt algorytmu, na którego stronie jesteśmy
	const sortObj = useSelector((state) => state.algorithms).filter(
		(sort) => sort.name === match.params.id
	)[0];
	const place = useSelector((state) => selectSortedPositions(state)).indexOf(
		sortObj
	);

	const dispatch = useDispatch();

	const startingData = {
		sortingPercent: 0,
		sortingStep: 0,
		data: test.map((value) => ({ pv: value }))
	};
	/*
	 * data, setDate -> manipulowanie danymi wizualizacji
	 * lineChartData, setLineChartData -> Dane do wykresu liniowego
	 * sortingInfo, setSortingInfo -> Dane podczas iteracji sortowania
	 * modalIsOpen, setIsOpen -> wyświetlanie okna ustawień
	 */
	const [data, setData] = useState(startingData);
	const [lineChartData, setLineChartdata] = useState([]);
	const [sortingInfo, setSortingInfo] = useState({ passed: 0, time: 0 });
	const [modalIsOpen, setIsOpen] = useState(false);

	const options = useSelector((state) => state.tests);
	const sortT = sortObj.sortingTime.average;

	//* Metoda odpowiedzialna za wizualizacje sortowania
	const visualizationStep = () => {
		setCanRun({ ...canRun, visualization: false });
		const arr = [];

		//* Pobieramy stan sortowanej tablicy po każdej iteracji algorytmu sortującego
		let gen = sortObj.generator(test);
		for (let vStep of gen) {
			arr.push(Array.from(vStep));
		}

		//* Wyświetlamy krok wizualizacji oraz % ukończenia w  komponentach Card
		arr.forEach((ele, i) => {
			setTimeout(() => {
				setData({
					sortingStep: i + 1,
					sortingPercent: (i + 1) / arr.length,
					data: ele.map((value) => ({ pv: value }))
				});
				//* Po skończeniu wizualizacji odblokowujemy przycisk
				if (i === arr.length - 1) {
					setCanRun({ ...canRun, visualization: true });
				}
			}, 300 * i);
		});
	};

	//* Metoda odpowiedzialna za przeprowadzenie testów sortowania
	const runTestRoutine = async () => {
		setCanRun({ ...canRun, computation: false });
		let passed = 0;
		const lineData = [];

		//* Uruchamiamy sortowanie w osobnym procesie przez workera
		const arr = await instance.sortManager(match.params.id, options);

		//* Wyświetlamy krok oraz czas każdego ze stanów w komponentach Card
		arr.forEach((ele, i) => {
			setTimeout(() => {
				setSortingInfo({
					passed: ++passed,
					time: ele.average
				});
				//* Po skończeniu wizualizacji odblokowujemy przycisk
				if (i === arr.length - 1) {
					setCanRun({ ...canRun, computation: true });
				}
			}, 200 * i);
			lineData.push({ ...ele });
		});

		//* Wyświetlamy dane na wykresie
		setTimeout(() => {
			const [best, average, worst] = evaluateResults(lineData);
			setLineChartdata(lineData);
			dispatch(setSortingTime(match.params.id, { worst, best, average }));
		}, arr.length * 200);
	};

	return (
		<div className="Dashboard" style={currentStyle}>
			<SettingsModal
				isOpen={modalIsOpen}
				onRequestClose={() => setIsOpen(false)}
				contentLabel="Example Modal"
			/>
			<div className="overview">
				<div className="overview-title">
					<h1>{match.params.id}</h1>
					<p>Overview of sorting algorithm</p>
				</div>
				<div className="button-group">
					<button
						type="button"
						className="data-options-button"
						onClick={() => setIsOpen(() => true)}
					>
						<EditSVG width="24px" height="24px" />
						Manage data options
					</button>
					<button
						className={`data-options-button ${
							!canRun.computation ? 'button--disabled' : ''
						}`}
						type="button"
						onClick={() => runTestRoutine()}
					>
						<PlusSVG width="24px" height="24px" />
						Run tests
					</button>
					<button
						className={`data-options-button ${
							!canRun.visualization ? 'button--disabled' : ''
						}`}
						type="button"
						onClick={() => visualizationStep()}
					>
						<PlusSVG width="24px" height="24px" />
						Show example visualization
					</button>
				</div>
			</div>
			<div className="small-cards algorithms">
				<Card
					title={`#${place + 1}`}
					subtitle={'Position in ranking'}
					icon={TrophySVG}
					background={{ backgroundColor: 'rgba(255,184,0,0.07)' }}
				/>
				<Card
					title={`${sortT}ms`}
					subtitle={'Average sorting time'}
					icon={ClockSVG}
					background={{ backgroundColor: 'rgba(76,184,255,0.07)' }}
				/>
				<CardBig
					desc={sortObj.description}
					icon={InfoSVG}
					background={{ backgroundColor: 'white' }}
				/>
			</div>
			<div className="charts">
				<ChartLine width={820} height={380} data={lineChartData} />
				<ChartVisualize width={890} height={404} data={data.data} />
			</div>
			<div className="small-cards">
				<Card
					title={sortingInfo.passed}
					subtitle={'Sortings passed'}
					icon={RefreshSVG}
					background={{ backgroundColor: 'rgba(255,184,0,0.07)' }}
				/>
				<Card
					title={sortingInfo.time}
					subtitle={'Sorting time'}
					icon={ClockSVG}
					background={{ backgroundColor: 'rgba(76,184,255,0.07)' }}
				/>
				<Card
					title={data.sortingStep}
					subtitle={'Sorting step'}
					icon={IncreaseSVG}
					background={{ backgroundColor: 'rgba(76,184,255,0.07)' }}
				/>
				<Card
					title={numeral(data.sortingPercent).format('0.00%')}
					subtitle={'Sorting completion'}
					icon={PercentSVG}
					background={{ backgroundColor: 'rgba(76,184,255,0.07)' }}
				/>
			</div>
			<p style={{ textAlign: 'right' }}>Made by Chili Labs & Piotr</p>
		</div>
	);
}
