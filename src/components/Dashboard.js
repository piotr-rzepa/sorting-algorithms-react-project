/*
 * Komponent bezklasowy będący stroną główną aplikacji
 */

import React, { useState } from 'react';
import Card from './Card';
import ChartBar from './ChartBar';
import ChartPie from './ChartPie';
import AlgoList from './AlgoList';
import SettingsModal from './SettingsModal';
import { ReactComponent as PlusSVG } from '../images/plus.svg';
import { ReactComponent as EditSVG } from '../images/edit.svg';
import { useSelector } from 'react-redux';
import selectFastestSlowestAlgo from '../selectors/fastslowestSelector';
import numeral from 'numeral';

export default function Dashboard() {
	const numberOfAlgorithms = useSelector((state) => state.algorithms.length);
	const [fastest, slowest, average] = useSelector((state) =>
		selectFastestSlowestAlgo(state)
	);
	const [modalIsOpen, setIsOpen] = useState(false);

	return (
		<div className="Dashboard">
			<SettingsModal
				isOpen={modalIsOpen}
				onRequestClose={() => setIsOpen(false)}
				contentLabel="Example Modal"
			/>
			<div className="overview">
				<h1>Dashboard</h1>
				<p>Overview of sorting algorithms</p>

				<button type="button" onClick={() => setIsOpen(() => true)}>
					<EditSVG width="24px" height="24px" />
					Manage data options
				</button>
				<button type="button">
					<PlusSVG width="24px" height="24px" />
					Populate algorithms with data
				</button>
			</div>
			<div className="small-cards">
				<Card title={numberOfAlgorithms} subtitle={'Algorithms'} />
				<Card
					title={`${numeral(average * 100).format('00:00:00')}ms`}
					subtitle={'Overall average sorting time'}
				/>
				<Card title={slowest} subtitle={'Worst average sorting time'} />
				<Card title={fastest} subtitle={'Best average sorting time'} />
			</div>
			<div className="charts">
				<ChartBar width={830} height={569} />
				<AlgoList width={395} height={572} />
				<ChartPie width={395} height={572} />
			</div>
			<p>Made by Chili Labs & Piotr</p>
		</div>
	);
}
