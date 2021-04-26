/*
 * Komponent bezklasowy będący "kartą" -> Blokiem z informacją np. o  szybkości działania
 */

/* eslint-disable react/prop-types */
import React from 'react';

export default function Card({ title, subtitle, icon, background }) {
	return (
		<div className="Card">
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
