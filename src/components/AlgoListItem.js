/*
 * Komponent bezklasowy reprezentujący pojedynczy algorytm w liście
 */

/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { styleFont } from '../styles/styles';
import { ThemeContext } from './ThemeContext';

export default function AlgoListItem(props) {
	// Pobieranie motywu [jasny/ciemny]
	const darkTheme = useContext(ThemeContext);

	//Ustawianie motywu w zależności od kontekstu
	const currentStyle = darkTheme ? styleFont.darkStyle : styleFont.lightStyle;
	return (
		<React.Fragment key={props.id}>
			<li>
				<Link to={`/algorithm/${props.name}`} style={currentStyle}>
					{props.name}
				</Link>
				:{props.sortingTime.average}
			</li>
		</React.Fragment>
	);
}
