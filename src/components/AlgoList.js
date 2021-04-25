/*
 * Komponent bezklasowy odpowiedzialny za listę algorytmów w Dashboardzie
 */

/* eslint-disable react/prop-types */
import React from 'react';
import AlgoListItem from './AlgoListItem';
import { useSelector, useDispatch } from 'react-redux';
import selectSortedAlgorithms from '../selectors/sortingSelector';
import { setSortingAsc, setSortingDesc } from '../actions/filters';

export default function AlgoList(props) {
	const algorithms = useSelector((state) => selectSortedAlgorithms(state));
	const dispatch = useDispatch();

	//* Zmiana sortowania z dispatchem do reduxa
	const onSortChange = (sort) => {
		sort === 'Descending'
			? dispatch(setSortingDesc())
			: dispatch(setSortingAsc());
	};

	return (
		<div
			style={{
				width: `${props.width}px`,
				height: `${props.height}px`,
				border: '1px solid black'
			}}
		>
			<p>Algorithms by sorting time</p>
			<select name="sorting" onChange={(e) => onSortChange(e.target.value)}>
				<option>Descending</option>
				<option>Ascending</option>
			</select>
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
