/*
 * Komponent bezklasowy reprezentujący pojedynczy algorytm w liście
 */

/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function AlgoListItem(props) {
	return (
		<React.Fragment key={props.id}>
			<li>
				<Link to={`/algorithm/${props.name}`}>{props.name}</Link>:{' '}
				{props.sortingTime.average}{' '}
			</li>
		</React.Fragment>
	);
}
