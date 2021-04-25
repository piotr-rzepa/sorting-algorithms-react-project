/*
 * Komponent bezklasowy będacy wykresem kołowym z podziałem algorytmów \
 * na kategorie względem rodzaju sortowania jaki stosują
 */

/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { PieChart, Pie, Cell, Legend, Tooltip, LabelList } from 'recharts';
import selectMethodsOfSorting from '../selectors/sortingMethodSelector';

export default function CardChart(props) {
	const barColors = ['#33D69F', '#6F52ED', '#FF4C61', '#FFB800'];
	const algorithms = useSelector((state) => selectMethodsOfSorting(state));

	return (
		<div
			style={{
				width: `${props.width}px`,
				height: `${props.height}px`
			}}
			className="card-chart"
		>
			<p> Algorithms by method of sorting</p>
			<hr />
			<PieChart width={props.width - 20} height={props.height - 20}>
				<Pie
					data={algorithms}
					dataKey="value"
					cx="50%"
					cy="50%"
					innerRadius={80}
					outerRadius={100}
					label
				>
					{algorithms.map((_, index) => (
						<Cell key={`cell-${index}`} fill={barColors[index]} />
					))}
					<LabelList dataKey="method" position="insideEnd" />
				</Pie>
				<Legend layout="vertical" align="left" iconType="plainline" iconSize={60} />
				<Tooltip
					formatter={(value, name) => (
						<p>
							Method: {algorithms[name].method}
							<br />
							Algortihms: {value}
						</p>
					)}
				/>
			</PieChart>
		</div>
	);
}
