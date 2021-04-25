import { bubbleSortAsc, bubbleSortDesc } from '../sortingImpl/bubblesort';
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

export const sortManager = (sortType, options) => {
	switch (sortType) {
	case 'Bubble Sort': {
		const arr = [];
		console.time('Sort iteration');
		for (let x of testCaseGenerator(options, bubbleSortAsc, bubbleSortDesc))
			arr.push(x);
		console.timeEnd('Sort iteration');
		return arr;
	}
	case 'Quick Sort': {
		const arr = [];
		for (let x of testCaseGenerator(options, quickSortAsc, quickSortDesc))
			arr.push(x);
		return arr;
	}
	case 'Insertion Sort': {
		const arr = [];
		for (let x of testCaseGenerator(
			options,
			insertionSortAsc,
			insertionSortDesc
		))
			arr.push(x);
		return arr;
	}
	case 'Selection Sort': {
		const arr = [];
		for (let x of testCaseGenerator(
			options,
			selectionSortAsc,
			selectionSortDesc
		))
			arr.push(x);
		return arr;
	}
	case 'Shell Sort': {
		const arr = [];
		for (let x of testCaseGenerator(options, shellSortAsc, shellSortDesc))
			arr.push(x);
		return arr;
	}
	}
};

function* testCaseGenerator(options, sortAsc, sortDesc) {
	const results = [];
	const sizeIncreaseStep = options.arrayEndSize / options.arrayStartSize;
	const sort = options.sortingOrder === 'asc' ? sortAsc : sortDesc;
	for (let j = 1; j <= sizeIncreaseStep; ++j) {
		let bestTime = Number.POSITIVE_INFINITY;
		let worstTime = -1;
		let averageTime = 0;
		const testingSize = options.arrayStartSize * j;
		for (let i = 0; i < options.datasetSize; ++i) {
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
			average: averageTime / options.datasetSize
		});
		//console.log(results);
		yield results[j - 1];
	}
}

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
