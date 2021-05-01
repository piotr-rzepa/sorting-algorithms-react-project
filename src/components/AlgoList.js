/*
 * Komponent bezklasowy odpowiedzialny za listę algorytmów w Dashboardzie
 */

/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import AlgoListItem from './AlgoListItem';
import { useSelector, useDispatch } from 'react-redux';
import selectSortedAlgorithms from '../selectors/sortingSelector';
import { setSortingAsc, setSortingDesc } from '../actions/filters';
import { ThemeContext } from './ThemeContext';
import { styleCard, styleSelect } from '../styles/styles';

export default function AlgoList() {
	const algorithms = useSelector((state) => selectSortedAlgorithms(state));
	const dispatch = useDispatch();

	//* Zmiana sortowania z dispatchem do reduxa
	const onSortChange = (sort) => {
		sort === 'Descending'
			? dispatch(setSortingDesc())
			: dispatch(setSortingAsc());
	};

	// Pobieranie motywu [jasny/ciemny]
	const darkTheme = useContext(ThemeContext);

	//Ustawianie motywu w zależności od kontekstu
	const currentStyleCard = darkTheme
		? styleCard.darkStyle
		: styleCard.lightStyle;
	const currentStyleSelect = darkTheme
		? styleSelect.darkStyle
		: styleSelect.lightStyle;

	return (
		<div className="algorithm-list" style={currentStyleCard}>
			<div className="algorithm-list-title">
				<p>Algorithms by sorting time</p>
				<select
					className="select"
					name="sorting"
					onChange={(e) => onSortChange(e.target.value)}
					style={currentStyleSelect}
				>
					<option>Descending</option>
					<option>Ascending</option>
				</select>
			</div>
			<hr />
			<ul>
				{algorithms.map((algorithm) => (
					<AlgoListItem
						key={algorithm.id}
						name={algorithm.name}
						sortingTime={algorithm.sortingTime}
					/>
				))}
			</ul>
		</div>
	);
}
