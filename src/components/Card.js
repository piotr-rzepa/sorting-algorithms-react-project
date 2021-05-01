/* eslint-disable no-unused-vars */
/*
 * Komponent bezklasowy będący "kartą" -> Blokiem z informacją np. o  szybkości działania
 */

/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { styleCard } from '../styles/styles';
export default function Card({ title, subtitle, icon, background }) {
	// Pobieranie motywu [jasny/ciemny]
	const darkTheme = useContext(ThemeContext);

	//Ustawianie motywu w zależności od kontekstu
	const currentStyle = darkTheme ? styleCard.darkStyle : styleCard.lightStyle;
	return (
		<div className="Card" style={currentStyle}>
			<div className="svg-image-background" style={background}>
				<img src={icon} width={38} height={38} alt="Icon" />
			</div>
			<div className="Card-description">
				<h2>{title}</h2>
				<p className="subtitle">{subtitle}</p>
			</div>
		</div>
	);
}
