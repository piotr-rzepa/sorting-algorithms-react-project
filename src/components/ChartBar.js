/* eslint-disable no-unused-vars */
/*
 * Komponent bezklasowy będacy wykresem słupkowym z czasami worst,best,average \
 * poszczególnych algorytmów na stronie głównej
 */

/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	CartesianGrid,
	LabelList,
	ResponsiveContainer
} from 'recharts';
import { useSelector } from 'react-redux';
import { ThemeContext } from './ThemeContext';
import { styleCard } from '../styles/styles';
export default function ChartBar(props) {
	// Pobieranie motywu [jasny/ciemny]
	const darkTheme = useContext(ThemeContext);

	//Ustawianie motywu w zależności od kontekstu
	const currentStyle = darkTheme ? styleCard.darkStyle : styleCard.lightStyle;

	const barColors = ['#6F52ED', '#28E451', '#FF7A00'];
	const algorithms = useSelector((state) => state.algorithms);

	const chartData = [...algorithms].map((algorithm) => {
		return {
			name: algorithm.name,
			best: algorithm.sortingTime.best,
			worst: algorithm.sortingTime.worst,
			average: algorithm.sortingTime.average
		};
	});
	return (
		<div
			className="card-chart card-chart--big"
			style={{ height: props.height, ...currentStyle }}
		>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart width={props.width} height={props.height} data={chartData}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend align="right" verticalAlign="top" />
					{Object.getOwnPropertyNames(algorithms[0].sortingTime).map(
						(property, index) => (
							<Bar dataKey={property} key={property} fill={barColors[index]}>
								<LabelList dataKey={property} position="top" />
							</Bar>
						)
					)}
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
}
