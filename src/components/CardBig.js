/* eslint-disable no-unused-vars */
/*
 * Komponent bezklasowy -> wariacja karty, z innym stylem
 */

/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { styleCard } from '../styles/styles';
export default function CardBig({ desc, icon, background }) {
	// Pobieranie motywu [jasny/ciemny]
	const darkTheme = useContext(ThemeContext);

	//Ustawianie motywu w zależności od kontekstu
	const currentStyle = darkTheme ? styleCard.darkStyle : styleCard.lightStyle;
	return (
		<div className="Card Card--big" style={currentStyle}>
			<div className="svg-image-background" style={background}>
				<img src={icon} width={38} height={38} alt="Icon" />
			</div>
			<div className="Card-description">
				<h4>{desc}</h4>
			</div>
		</div>
	);
}
