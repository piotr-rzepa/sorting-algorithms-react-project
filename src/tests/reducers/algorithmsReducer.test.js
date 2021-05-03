import algorithmReducer, {
	defaultReducerState
} from '../../reducers/algorithmReducer';

const dataBest = {
	type: 'SET_SORTING_TIME_BEST',
	name: 'Bubble Sort',
	payload: {
		best: 123.321
	}
};
const dataWorst = {
	type: 'SET_SORTING_TIME_WORST',
	name: 'Bubble Sort',
	payload: {
		best: 3.425
	}
};
const dataAverage = {
	type: 'SET_SORTING_TIME_AVERAGE',
	name: 'Bubble Sort',
	payload: {
		best: 2543.1245
	}
};
const dataOverall = {
	type: 'SET_SORTING_TIME',
	name: 'Bubble Sort',
	payload: {
		best: 1,
		worst: 2,
		average: 3
	}
};

const invalidData = {
	type: 'SET_INVALID',
	name: 'Bubble Sort',
	payload: {
		best: 1,
		worst: 2,
		average: 3
	}
};

test('Should setup default reducer\'s state', () => {
	const state = algorithmReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual(defaultReducerState);
});

test('Should set best sorting time of algorithm to some value', () => {
	const state = algorithmReducer(undefined, dataBest);
	expect(state[0].sortingTime.best).toBe(dataBest.payload.best);
});

test('Should set worst sorting time of algorithm to some value', () => {
	const state = algorithmReducer(undefined, dataWorst);
	expect(state[0].sortingTime.best).toBe(dataWorst.payload.worst);
});

test('Should set best sorting time of algorithm to some value', () => {
	const state = algorithmReducer(undefined, dataAverage);
	expect(state[0].sortingTime.best).toBe(dataAverage.payload.average);
});

test('Should set best sorting time of algorithm to some value', () => {
	const state = algorithmReducer(undefined, dataOverall);
	expect(state[0].sortingTime).toEqual(dataOverall.payload);
});

test('Should not modify state of the reducer', () => {
	const state = algorithmReducer(undefined, invalidData);
	expect(state).toEqual(defaultReducerState);
});
