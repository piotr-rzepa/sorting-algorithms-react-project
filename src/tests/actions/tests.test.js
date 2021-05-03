import {
	setSizeDataset,
	setSizeArray,
	setArrayGain,
	setDataOrder,
	setSortingOrder
} from '../../actions/tests';

test('Should set datasize action object', () => {
	const size = 10;
	const action = setSizeDataset(size);
	expect(action).toEqual({
		type: 'SET_SIZE_DATASET',
		payload: {
			datasetSize: size
		}
	});
});

test('Should set sizeArray action object', () => {
	const size = 54678;
	const action = setSizeArray(size);
	expect(action).toEqual({
		type: 'SET_SIZE_ARRAY',
		payload: {
			arrayStartSize: size
		}
	});
});

test('Should set arrayGain action object', () => {
	const size = 7584930;
	const action = setArrayGain(size);
	expect(action).toEqual({
		type: 'SET_ARRAY_GAIN',
		payload: {
			arrayEndSize: size
		}
	});
});

test('Should set data order action object', () => {
	const order = 'asc';
	const action = setDataOrder(order);
	expect(action).toEqual({
		type: 'SET_DATA_ORDER',
		payload: {
			dataOrder: order
		}
	});
});

test('Should set sorting order action object', () => {
	const order = 'desc';
	const action = setSortingOrder(order);
	expect(action).toEqual({
		type: 'SET_SORTING_ODER',
		payload: {
			sortingOrder: order
		}
	});
});
