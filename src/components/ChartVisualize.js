/*
 * Komponent bezklasowy będacy wykresem słupkowym z indeksem na osi X oraz wartością na osi Y\
 * Służy do wizualizacji sortowania, którą może zobaczyć użytkownik
 */

/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Legend,
	CartesianGrid,
	ResponsiveContainer
} from 'recharts';

export default function ChartVisualize(props) {
	return (
		<div className="card-chart--big chart-visualize">
			<ResponsiveContainer>
				<BarChart data={props.data} barGap={0} barCategoryGap={0}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Legend align="right" verticalAlign="top" />
					<Bar dataKey="pv" fill="#8884d8" />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
