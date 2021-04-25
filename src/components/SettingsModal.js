/*
 * Zewnętrzny modal pozwalający użytkownikowi na konfigurację opcji do przeprowadzania testów
 */

/* eslint-disable react/prop-types */
import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import {
	setSizeDataset,
	setSizeArray,
	setDataOrder,
	setSortingOrder,
	setArrayGain
} from '../actions/tests';

export default function SettingsModal({
	isOpen,
	onRequestClose,
	contentLabel
}) {
	const {
		datasetSize,
		arrayStartSize,
		dataOrder,
		sortingOrder,
		arrayEndSize
	} = useSelector((state) => state.tests);
	const dispatch = useDispatch();
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel={contentLabel}
		>
			<h2>Algorithm dataset settings</h2>
			<label htmlFor="dataset-length" name="dataset-length">
				Number of tests per array length:
			</label>
			<input
				type="number"
				min="10"
				max="10000"
				step="10"
				value={datasetSize}
				onChange={(e) => dispatch(setSizeDataset(parseInt(e.target.value, 10)))}
				required
			></input>
			<label htmlFor="starting-array-length" name="starting-array-length">
				Star array length:
			</label>
			<input
				type="number"
				min="10"
				max="1000"
				step="10"
				value={arrayStartSize}
				onChange={(e) => dispatch(setSizeArray(parseInt(e.target.value, 10)))}
				required
			></input>
			<label htmlFor="array-gain" name="array-gain">
				End array length:
			</label>
			<input
				type="number"
				min="100"
				max="10000"
				step="10"
				value={arrayEndSize}
				onChange={(e) => dispatch(setArrayGain(parseInt(e.target.value, 10)))}
				required
			></input>
			<p>Select data order:</p>
			<div>
				<input
					type="radio"
					id="best"
					name="scenario"
					value="best"
					checked={dataOrder === 'best' ? true : false}
					onChange={() => dispatch(setDataOrder('best'))}
				></input>
				<label htmlFor="best"> Best scenario (data already sorted)</label>
				<input
					type="radio"
					id="worst"
					name="scenario"
					value="worst"
					checked={dataOrder === 'worst' ? true : false}
					onChange={() => dispatch(setDataOrder('worst'))}
				></input>
				<label htmlFor="worst"> Worst scenario (data sorted in reverse)</label>
				<input
					type="radio"
					id="random"
					name="scenario"
					value="random"
					checked={dataOrder === 'random' ? true : false}
					onChange={() => dispatch(setDataOrder('random'))}
				></input>
				<label htmlFor="random"> Random scenario (unfiorm distribution)</label>
			</div>
			<p>Select sorting order:</p>
			<div>
				<input
					type="radio"
					id="asc"
					name="sorting"
					value="asc"
					checked={sortingOrder === 'asc' ? true : false}
					onChange={() => dispatch(setSortingOrder('asc'))}
				></input>
				<label>Ascending order</label>
				<input
					type="radio"
					id="desc"
					name="sorting"
					value="desc"
					checked={sortingOrder === 'desc' ? true : false}
					onChange={() => dispatch(setSortingOrder('desc'))}
				></input>
				<label>Descending order</label>
			</div>
			<button type="button" onClick={() => onRequestClose()}>
				Save and close
			</button>
		</Modal>
	);
}
