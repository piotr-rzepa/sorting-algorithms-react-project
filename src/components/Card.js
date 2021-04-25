/*
 * Komponent bezklasowy będący "kartą" -> Blokiem z informacją np. o  szybkości działania
 */

/* eslint-disable react/prop-types */
import React from 'react';

export default function Card({ title, subtitle }) {
	return (
		<div className="Card">
			<h2>{title}</h2>
			<p>{subtitle}</p>
		</div>
	);
}
