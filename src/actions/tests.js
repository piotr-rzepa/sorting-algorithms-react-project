/*
 * AKCJE DO MODYFIKACJI OBIEKTU TESTOWEGO, ZAWIERAJĄCE USTAWIENIA UŻYTKOWNIKA
 */

export const setSizeDataset = (datasetSize) => {
	return {
		type: 'SET_SIZE_DATASET',
		payload: {
			datasetSize: datasetSize
		}
	};
};
export const setSizeArray = (arraySize) => {
	return {
		type: 'SET_SIZE_ARRAY',
		payload: { arrayStartSize: arraySize }
	};
};

export const setArrayGain = (arrayGain) => {
	return {
		type: 'SET_ARRAY_GAIN',
		payload: { arrayEndSize: arrayGain }
	};
};
export const setDataOrder = (dataOrder) => {
	return {
		type: 'SET_DATA_ORDER',
		payload: { dataOrder: dataOrder }
	};
};
export const setSortingOrder = (sortingOrder) => {
	return {
		type: 'SET_SORTING_ODER',
		payload: { sortingOrder: sortingOrder }
	};
};
