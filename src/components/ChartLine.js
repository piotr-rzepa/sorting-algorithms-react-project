/*
 * Komponent bezklasowy będacy wykresem liniowym z czasami worst,best,average \
 * poszczególnych algorytmów na ich stronach
 */

/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import {
	LineChart,
	Line,
	Legend,
	Tooltip,
	XAxis,
	YAxis,
	CartesianGrid,
	ResponsiveContainer
} from 'recharts';
import { ThemeContext } from './ThemeContext';
import { styleCard } from '../styles/styles';
export default function CardChart(props) {
	// Pobieranie motywu [jasny/ciemny]
	const darkTheme = useContext(ThemeContext);

	//Ustawianie motywu w zależności od kontekstu
	const currentStyle = darkTheme ? styleCard.darkStyle : styleCard.lightStyle;
	return (
		<div
			style={currentStyle}
			className="card-chart card-chart--big card--line chart-visualize"
		>
			<ResponsiveContainer>
				<LineChart
					data={props.data}
					margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="size" />
					<YAxis />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="worst" stroke="#FF7A00" />
					<Line type="monotone" dataKey="average" stroke="#6F52ED" />
					<Line type="monotone" dataKey="best" stroke="#28E451" />
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
}
