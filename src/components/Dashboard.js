/*
 * Komponent bezklasowy będący stroną główną aplikacji
 */

import React, { useState, useContext } from 'react';
import Card from './Card';
import ChartBar from './ChartBar';
import ChartPie from './ChartPie';
import AlgoList from './AlgoList';
import SettingsModal from './SettingsModal';
import { ReactComponent as EditSVG } from '../images/edit.svg';
import GroupSVG from '../images/group.svg';
import ClockSVG from '../images/clock.svg';
import DecreasingSVG from '../images/decreasing.svg';
import TrophySVG from '../images/trophy.svg';
import { useSelector } from 'react-redux';
import selectFastestSlowestAlgo from '../selectors/fastslowestSelector';
import numeral from 'numeral';
import { ThemeContext } from './ThemeContext';
import { styleMain, styleButtons } from '../styles/styles';

export default function Dashboard() {
	// Pobieranie motywu [jasny/ciemny]
	const darkTheme = useContext(ThemeContext);

	//Ustawianie motywu w zależności od kontekstu
	const currentStyle = darkTheme ? styleMain.darkStyle : styleMain.lightStyle;
	const numberOfAlgorithms = useSelector((state) => state.algorithms.length);
	const [fastest, slowest, average] = useSelector((state) =>
		selectFastestSlowestAlgo(state)
	);
	const [modalIsOpen, setIsOpen] = useState(false);

	return (
		<div className="Dashboard" style={currentStyle}>
			<SettingsModal
				isOpen={modalIsOpen}
				onRequestClose={() => setIsOpen(false)}
				contentLabel="Example Modal"
			/>
			<div className="overview">
				<div className="overview-title">
					<h1>Dashboard</h1>
					<p>Overview of sorting algorithms</p>
				</div>
				<button
					className="data-options-button"
					type="button"
					onClick={() => setIsOpen(() => true)}
					style={darkTheme ? styleButtons.darkStyle : styleButtons.lightStyle}
				>
					<EditSVG width="24px" height="24px" />
					Manage data options
				</button>
			</div>
			<div className="small-cards">
				<Card
					title={numberOfAlgorithms}
					subtitle={'Algorithms'}
					icon={GroupSVG}
					background={{ backgroundColor: 'rgba(113,59,219,0.05)' }}
				/>
				<Card
					title={`${numeral(average * 100).format('00:00:00')}ms`}
					subtitle={'Overall average sorting time'}
					icon={ClockSVG}
					background={{ backgroundColor: 'rgba(76,184,255,0.07)' }}
				/>
				<Card
					title={slowest}
					subtitle={'Worst average sorting time'}
					icon={DecreasingSVG}
					background={{ backgroundColor: 'rgba(255,76,97,0.05)' }}
				/>
				<Card
					title={fastest}
					subtitle={'Best average sorting time'}
					icon={TrophySVG}
					background={{ backgroundColor: 'rgba(255,184,0,0.07)' }}
				/>
			</div>
			<div className="charts">
				<ChartBar width={820} height={609} />
				<AlgoList />
				<ChartPie width={387} height={609} />
			</div>
			<p style={{ textAlign: 'right', padding: '2px 0' }}>
				Made by Chili Labs & Piotr
			</p>
		</div>
	);
}
