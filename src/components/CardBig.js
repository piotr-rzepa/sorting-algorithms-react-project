/*
 * Komponent bezklasowy -> wariacja karty, z innym stylem
 */

/* eslint-disable react/prop-types */
import React from 'react';

export default function CardBig({ desc }) {
	return (
		<div className="Card Card--big">
			<h4>{desc}</h4>
		</div>
	);
}
