/*
 * Komponent bezklasowy -> wariacja karty, z innym stylem
 */

/* eslint-disable react/prop-types */
import React from 'react';

export default function CardBig({ desc, icon, background }) {
	return (
		<div className="Card Card--big">
			<div className="svg-image-background" style={background}>
				<img src={icon} width={38} height={38} alt="Icon" />
			</div>
			<div className="Card-description">
				<h4>{desc}</h4>
			</div>
		</div>
	);
}
