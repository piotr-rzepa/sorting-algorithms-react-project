/*
 * Komponent bezklasowy będacy wykresem słupkowym z indeksem na osi X oraz wartością na osi Y\
 * Służy do wizualizacji sortowania, którą może zobaczyć użytkownik
 */

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Legend, CartesianGrid } from 'recharts';

export default function ChartVisualize(props) {
	return (
		<div>
			<BarChart
				width={props.width}
				height={props.height}
				data={props.data}
				barGap={0}
				barCategoryGap={0}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Legend align="right" verticalAlign="top" />
				<Bar dataKey="pv" fill="#8884d8" />
			</BarChart>
		</div>
	);
}
