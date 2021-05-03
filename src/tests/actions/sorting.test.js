import {
	setSortingTimeBest,
	setSortingTimeWorst,
	setSortingTimeAverage,
	setSortingTime
} from '../../actions/sorting';

test('Should set best sorting time and name of algorithm', () => {
	const name = 'Bubble sort';
	const time = 1.23;
	const action = setSortingTimeBest(name, time);
	expect(action).toEqual({
		type: 'SET_SORTING_TIME_BEST',
		name,
		payload: {
			best: time
		}
	});
});

test('Should set worst sorting time and name of algorithm', () => {
	const name = 'Shell sort';
	const time = 54.579;
	const action = setSortingTimeWorst(name, time);
	expect(action).toEqual({
		type: 'SET_SORTING_TIME_WORST',
		name,
		payload: {
			worst: time
		}
	});
});

test('Should set average sorting time and name of algorithm', () => {
	const name = 'Selection sort';
	const time = 0.000245;
	const action = setSortingTimeAverage(name, time);
	expect(action).toEqual({
		type: 'SET_SORTING_TIME_AVERAGE',
		name,
		payload: {
			average: time
		}
	});
});

test('Should set sorting time with best,worst,average times object and name of algorithm', () => {
	const name = 'Selection sort';
	const time = { best: 1.23, worst: 54.45, average: 26.795 };
	const action = setSortingTime(name, time);
	expect(action).toEqual({
		type: 'SET_SORTING_TIME',
		name,
		payload: {
			...time
		}
	});
});
