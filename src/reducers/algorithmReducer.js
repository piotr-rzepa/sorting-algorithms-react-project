import { bubbleSortGen } from '../sortingImpl/bubblesort';
import { quickSortGen } from '../sortingImpl/quicksort';
import { insertionSortGen } from '../sortingImpl/insertionsort';
import { selectionSortGen } from '../sortingImpl/selectionsort';
import { shellSortGen } from '../sortingImpl/shellsort';

const defaultReducerState = [
	{
		id: 0,
		name: 'Bubble Sort',
		method: 'Exchanging',
		generator: bubbleSortGen,
		sortingTime: { best: 0, worst: 0, average: 0 }
	},
	{
		id: 1,
		name: 'Quick Sort',
		method: 'Partitioning',
		generator: quickSortGen,
		sortingTime: { best: 0, worst: 0, average: 0 }
	},
	{
		id: 2,
		name: 'Insertion Sort',
		method: 'Insertion',
		generator: insertionSortGen,
		sortingTime: { best: 0, worst: 0, average: 0 }
	},
	{
		id: 3,
		name: 'Selection Sort',
		method: 'Selection',
		generator: selectionSortGen,
		sortingTime: { best: 0, worst: 0, average: 0 }
	},
	{
		id: 4,
		name: 'Shell Sort',
		method: 'Insertion',
		generator: shellSortGen,
		sortingTime: { best: 0, worst: 0, average: 0 }
	}
];

//* REDUCER -> HOW ACTIONS TRANSFORM STATE INTO NEXT STATE
const algorithmReducer = (state = defaultReducerState, action) => {
	switch (action.type) {
	case 'SET_SORTING_TIME_BEST':
		return state.map((sort) => {
			if (sort.name === action.name) {
				return {
					...sort,
					sortingTime: {
						...sort.sortingTime,
						best: action.payload.best
					}
				};
			}
			return sort;
		});
	case 'SET_SORTING_TIME_WORST':
		return state.map((sort) => {
			if (sort.name === action.name) {
				return {
					...sort,
					sortingTime: {
						...sort.sortingTime,
						best: action.payload.worst
					}
				};
			}
			return sort;
		});
	case 'SET_SORTING_TIME_AVERAGE':
		return state.map((sort) => {
			if (sort.name === action.name) {
				return {
					...sort,
					sortingTime: {
						...sort.sortingTime,
						best: action.payload.average
					}
				};
			}
			return sort;
		});
	case 'SET_SORTING_TIME':
		return state.map((sort) => {
			if (sort.name === action.name) {
				return {
					...sort,
					sortingTime: { ...action.payload }
				};
			}
			return sort;
		});
	default:
		return state;
	}
};

export default algorithmReducer;
