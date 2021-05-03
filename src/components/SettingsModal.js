/*
 * Zewnętrzny modal pozwalający użytkownikowi na konfigurację opcji do przeprowadzania testów
 */

/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import {
	setSizeDataset,
	setSizeArray,
	setDataOrder,
	setSortingOrder,
	setArrayGain
} from '../actions/tests';
import { ThemeContext } from './ThemeContext';
import { styleModal, styleButtons, styleSearchBar } from '../styles/styles';

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
	const darkTheme = useContext(ThemeContext);
	const [currentModalStyle, currentButtonStyle, currentInputStyle] = darkTheme
		? [styleModal.darkStyle, styleButtons.darkStyle, styleSearchBar.darkStyle]
		: [styleModal.lightStyle, styleButtons.lightStyle, styleSearchBar.lightStyle];
	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			contentLabel={contentLabel}
			closeTimeoutMS={200}
			className="modal"
			style={{ overlay: { background: currentModalStyle.backgroundColor } }}
		>
			<h2>Algorithm dataset settings</h2>
			<div className="numeric-settings">
				<div className="settings-title">
					<label htmlFor="dataset-length" name="dataset-length">
						Number of tests per array length:
					</label>
					<label htmlFor="starting-array-length" name="starting-array-length">
						Star array length:
					</label>
					<label htmlFor="array-gain" name="array-gain">
						End array length:
					</label>
				</div>
				<div className="settings-input">
					<input
						type="number"
						min="10"
						max="10000"
						step="10"
						value={datasetSize}
						onChange={(e) => dispatch(setSizeDataset(parseInt(e.target.value, 10)))}
						style={currentInputStyle}
						required
					></input>
					<input
						type="number"
						min="10"
						max="1000"
						step="10"
						value={arrayStartSize}
						onChange={(e) => dispatch(setSizeArray(parseInt(e.target.value, 10)))}
						style={currentInputStyle}
						required
					></input>

					<input
						type="number"
						min="100"
						max="10000"
						step="10"
						value={arrayEndSize}
						onChange={(e) => dispatch(setArrayGain(parseInt(e.target.value, 10)))}
						style={currentInputStyle}
						required
					></input>
				</div>
			</div>
			<div className="select-settings">
				<p>Select data order:</p>
				<div className="select-settings-single">
					<input
						type="radio"
						id="best"
						name="scenario"
						value="best"
						checked={dataOrder === 'best' ? true : false}
						onChange={() => dispatch(setDataOrder('best'))}
					></input>
					<label htmlFor="best"> Best scenario (data already sorted)</label>
				</div>
				<div className="select-settings-single">
					<input
						type="radio"
						id="worst"
						name="scenario"
						value="worst"
						checked={dataOrder === 'worst' ? true : false}
						onChange={() => dispatch(setDataOrder('worst'))}
					></input>
					<label htmlFor="worst"> Worst scenario (data sorted in reverse)</label>
				</div>
				<div className="select-settings-single">
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
			</div>
			<div className="select-settings">
				<p>Select sorting order:</p>
				<div className="select-settings-single">
					<input
						type="radio"
						id="asc"
						name="sorting"
						value="asc"
						checked={sortingOrder === 'asc' ? true : false}
						onChange={() => dispatch(setSortingOrder('asc'))}
					></input>
					<label>Ascending order</label>
				</div>
				<div className="select-settings-single">
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
			</div>
			<button
				className="data-options-button--modal"
				type="button"
				onClick={() => onRequestClose()}
				style={currentButtonStyle}
			>
				Save and close
			</button>
		</Modal>
	);
}
