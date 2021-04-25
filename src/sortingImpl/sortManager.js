import { bubbleSortAsc, bubbleSortDesc } from './bubblesort';
import { quickSortAsc, quickSortDesc } from '../sortingImpl/quicksort';
import {
	insertionSortAsc,
	insertionSortDesc
} from '../sortingImpl/insertionsort';
import {
	selectionSortAsc,
	selectionSortDesc
} from '../sortingImpl/selectionsort';
import { shellSortAsc, shellSortDesc } from '../sortingImpl/shellsort';
import numeral from 'numeral';

const sortManager = (sortType, options) => {
	switch (sortType) {
	case 'Bubble Sort': {
		return testCaseGenerator(options, bubbleSortAsc, bubbleSortDesc);
	}
	case 'Quick Sort': {
		return testCaseGenerator(options, quickSortAsc, quickSortDesc);
	}
	case 'Insertion Sort': {
		return testCaseGenerator(options, insertionSortAsc, insertionSortDesc);
	}
	case 'Selection Sort': {
		return testCaseGenerator(options, selectionSortAsc, selectionSortDesc);
	}
	case 'Shell Sort': {
		return testCaseGenerator(options, shellSortAsc, shellSortDesc);
	}
	}
};

function* testCaseGenerator(options, sortAsc, sortDesc) {
	const results = [];
	const sizeIncreaseStep = options.arrayEndSize / options.arrayStartSize;
	const sort = options.sortingOrder === 'asc' ? sortAsc : sortDesc;

	for (let j = 1; j <= sizeIncreaseStep; ++j) {
		let bestTime = Number.POSITIVE_INFINITY;
		let worstTime = Number.NEGATIVE_INFINITY;
		let averageTime = 0;
		const testingSize = options.arrayStartSize * j;

		for (let i = 0; i < testingSize; ++i) {
			const data = dataGenerator(options, testingSize);
			const start = Date.now();
			sort(data);
			const end = Date.now();
			const measure = end - start;
			averageTime += measure;
			bestTime = Math.min(bestTime, measure);
			worstTime = Math.max(worstTime, measure);
		}
		results.push({
			size: testingSize,
			worst: worstTime,
			best: bestTime,
			average: averageTime / testingSize
		});
		yield results[j - 1];
	}
}

export const evaluateResults = (arr) => {
	const best =
		arr.map((stats) => stats.best).reduce((acc, curr) => acc + curr, 0) /
		arr.length;
	const worst =
		arr.map((stats) => stats.worst).reduce((acc, curr) => acc + curr, 0) /
		arr.length;
	const average =
		arr.map((stats) => stats.average).reduce((acc, curr) => acc + curr, 0) /
		arr.length;
	return [
		numeral(best).format('0[.]00'),
		numeral(average).format('0[.]00'),
		numeral(worst).format('0[.]00')
	];
};

const dataGenerator = ({ dataOrder, sortingOrder }, length) => {
	switch (dataOrder) {
	case 'random':
		return Array.from({ length }, () => Math.floor(Math.random() * 1000));
	case 'worst': {
		const arr = Array.from({ length }, (_, k) => k);
		return sortingOrder === 'asc' ? arr.reverse() : arr.sort();
	}
	case 'best': {
		const arr = Array.from({ length }, (_, k) => k);
		return sortingOrder === 'asc' ? arr : arr.reverse();
	}
	default:
		return undefined;
	}
};

export default sortManager;
