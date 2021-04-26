/*
 * Komponent bezklasowy będacy wykresem liniowym z czasami worst,best,average \
 * poszczególnych algorytmów na ich stronach
 */

/* eslint-disable react/prop-types */
import React from 'react';
import {
	LineChart,
	Line,
	Legend,
	Tooltip,
	XAxis,
	YAxis,
	CartesianGrid
} from 'recharts';

export default function CardChart(props) {
	return (
		<div
			style={{
				width: `${props.width}px`,
				height: `${props.height}px`
			}}
			className="card-chart card-chart--big"
		>
			<LineChart
				width={props.width}
				height={props.height}
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
		</div>
	);
}
