import { bubbleSortGen } from '../sortingImpl/bubblesort';
import { quickSortGen } from '../sortingImpl/quicksort';
import { insertionSortGen } from '../sortingImpl/insertionsort';
import { selectionSortGen } from '../sortingImpl/selectionsort';
import { shellSortGen } from '../sortingImpl/shellsort';

export const defaultReducerState = [
	{
		id: 0,
		name: 'Bubble Sort',
		description:
			'Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list.',
		method: 'Exchanging',
		generator: bubbleSortGen,
		sortingTime: { best: 0, worst: 0, average: 0 }
	},
	{
		id: 1,
		name: 'Quick Sort',
		description:
			'Quicksort is a divide-and-conquer algorithm. It works by selecting a \'pivot\' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. For this reason, it is sometimes called partition-exchange sort. The sub-arrays are then sorted recursively. Mathematical analysis of quicksort shows that, on average, the algorithm takes O(n log n) comparisons to sort n items. In the worst case, it makes O(n2) comparisons, though this behavior is rare. ',
		method: 'Partitioning',
		generator: quickSortGen,
		sortingTime: { best: 0, worst: 0, average: 0 }
	},
	{
		id: 2,
		name: 'Insertion Sort',
		description:
			'Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. Insertion sort iterates, consuming one input element each repetition, and grows a sorted output list. At each iteration, insertion sort removes one element from the input data, finds the location it belongs within the sorted list, and inserts it there. It repeats until no input elements remain.',
		method: 'Insertion',
		generator: insertionSortGen,
		sortingTime: { best: 0, worst: 0, average: 0 }
	},
	{
		id: 3,
		name: 'Selection Sort',
		description:
			' Selection sort is an in-place comparison sorting algorithm. It has an O(n2) time complexity, which makes it inefficient on large lists, and generally performs worse than the similar insertion sort. Selection sort is noted for its simplicity and has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.',
		method: 'Selection',
		generator: selectionSortGen,
		sortingTime: { best: 0, worst: 0, average: 0 }
	},
	{
		id: 4,
		name: 'Shell Sort',
		description:
			'Shellsort, also known as Shell sort or Shell\'s method, is an in-place comparison sort. It can be seen as either a generalization of sorting by exchange (bubble sort) or sorting by insertion (insertion sort). The method starts by sorting pairs of elements far apart from each other, then progressively reducing the gap between elements to be compared. By starting with far apart elements, it can move some out-of-place elements into position faster than a simple nearest neighbor exchange.',
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
