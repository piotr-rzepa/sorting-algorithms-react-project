import testsReducer, { testsReducerDefault } from '../../reducers/testsReducer';

const dataSetData = {
	type: 'SET_SIZE_DATASET',
	payload: {
		datasetSize: 10
	}
};

const arrayStartSizeData = {
	type: 'SET_SIZE_ARRAY',
	payload: {
		arrayStartSize: 34678
	}
};

const arrayEndSizeData = {
	type: 'SET_ARRAY_GAIN',
	payload: {
		arrayEndSize: 34678
	}
};

const sortingOrderData = {
	type: 'SET_SORTING_ODER',
	payload: {
		sortingOrder: 'asc'
	}
};

const arrayOrderData = {
	type: 'SET_DATA_ORDER',
	payload: {
		datasetSize: 34678
	}
};

const invalidData = {
	type: 'SET_DATA_ORDER_INVALID',
	payload: {
		datasetSize: 34678
	}
};

test('Should setup default state of the reducer', () => {
	const state = testsReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual(testsReducerDefault);
	expect(state.datasetSize).toBe(100);
	expect(state.arrayStartSize).toBe(100);
	expect(state.dataOrder).toBe('random');
	expect(state.sortingOrder).toBe('desc');
	expect(state.arrayEndSize).toBe(1000);
});

test('Should setup dataset size', () => {
	const state = testsReducer(undefined, dataSetData);
	expect(state.datasetSize).toBe(dataSetData.payload.datasetSize);
});

test('Should setup array start size', () => {
	const state = testsReducer(undefined, arrayStartSizeData);
	expect(state.arrayStartSize).toBe(arrayStartSizeData.payload.arrayStartSize);
});

test('Should setup array end size', () => {
	const state = testsReducer(undefined, arrayEndSizeData);
	expect(state.arrayEndSize).toBe(arrayEndSizeData.payload.arrayEndSize);
});

test('Should setup sorting order', () => {
	const state = testsReducer(undefined, sortingOrderData);
	expect(state.sortingOrder).toBe(sortingOrderData.payload.sortingOrder);
});

test('Should setup data order', () => {
	const state = testsReducer(undefined, arrayOrderData);
	expect(state.dataOrder).toBe(arrayOrderData.payload.dataOrder);
});

test('Should not modify state of the reducer', () => {
	const state = testsReducer(undefined, invalidData);
	expect(state).toEqual(testsReducerDefault);
});
