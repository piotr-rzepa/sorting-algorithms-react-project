/*
 * Komponent bezklasowy będący stroną z informacjami o poszczególnym algorytmie
 */

/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Card from './Card';
import CardBig from './CardBig';
import ChartLine from './ChartLine';
import ChartVisualize from './ChartVisualize';
import SettingsModal from './SettingsModal';
import { ReactComponent as PlusSVG } from '../images/plus.svg';
import { ReactComponent as EditSVG } from '../images/edit.svg';
import sortManager, { evaluateResults } from '../sortingImpl/sortManager';
import { useDispatch } from 'react-redux';
import { setSortingTime } from '../actions/sorting';
import numeral from 'numeral';
import worker from 'workerize-loader?inline!../workers/worker';

//* Obiekt match zawiera informację o ścieżce, parametrach, (w tym nazwę algorytmu który chcemy wyświetlić)
export default function AlgorithmPage({ match }) {
	//* State naszego workera
	const [instance, setInstance] = useState(undefined);

	//* Tylko przy montowaniu komponentu tworzymy workera, przy unmount usuwamy go
	useEffect(() => {
		setInstance(new worker());
		return () => setInstance(undefined);
	}, []);

	//* Tworzenie losowych danych do wizualizacji
	const test = Array.from(
		{ length: 100 },
		() => Math.floor(Math.random() * (100 - 0)) + 0
	);

	//* Obiekt algorytmu, na którego stronie jesteśmy
	const sortObj = useSelector((state) => state.algorithms).filter(
		(sort) => sort.name === match.params.id
	)[0];

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
			}, 500 * i);
		});
	};

	//* Metoda odpowiedzialna za przeprowadzenie testów sortowania
	const runTestRoutine = async () => {
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
		<div className="Dashboard">
			<SettingsModal
				isOpen={modalIsOpen}
				onRequestClose={() => setIsOpen(false)}
				contentLabel="Example Modal"
			/>
			<div className="overview">
				<h1>{match.params.id}</h1>
				<p>Overview of sorting algorithms</p>

				<button type="button" onClick={() => setIsOpen(() => true)}>
					<EditSVG width="24px" height="24px" />
					Manage data options
				</button>
				<button type="button" onClick={() => runTestRoutine()}>
					<PlusSVG width="24px" height="24px" />
					Run tests
				</button>
				<button type="button" onClick={() => visualizationStep()}>
					<PlusSVG width="24px" height="24px" />
					Show example visualization
				</button>
			</div>
			<div className="small-cards">
				<Card title={'#1'} subtitle={'Position in ranking'} />
				<Card title={`${sortT}ms`} subtitle={'Average sorting time'} />
				<CardBig desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
			</div>
			<div className="charts">
				<ChartLine width={830} height={378} data={lineChartData} />
				<ChartVisualize width={830} height={378} data={data.data} />
			</div>
			<div className="small-cards">
				<Card title={sortingInfo.passed} subtitle={'Sortings passed'} />
				<Card title={sortingInfo.time} subtitle={'Sorting time'} />
				<Card title={data.sortingStep} subtitle={'Sorting step'} />
				<Card
					title={numeral(data.sortingPercent).format('0.00%')}
					subtitle={'Sorting completion'}
				/>
			</div>
			<p>Made by Chili Labs & Piotr</p>
		</div>
	);
}
