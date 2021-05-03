import {
	insertionSortAsc,
	insertionSortDesc,
	insertionSortGen
} from '../../sortingImpl/insertionsort';

describe('Insertion sort', () => {
	let randomArray;
	let sortedAscending;
	let sortedDescending;

	beforeEach(() => {
		randomArray = Array.from({ length: 1000 }, () => Math.random());
		sortedAscending = [...randomArray].sort();
		sortedDescending = [...randomArray.sort()].reverse();
	});

	it('should return sorted collection in ascending order', () => {
		const bubbleSorted = insertionSortAsc(randomArray);
		expect(bubbleSorted).toEqual(sortedAscending);
	});

	it('should return sorted collection in descending order', () => {
		const bubbleSorted = insertionSortDesc(randomArray);
		expect(bubbleSorted).toEqual(sortedDescending);
	});

	it('should render each step until array is sorted', () => {
		const gen = insertionSortGen(randomArray);
		for (const ele of gen) {
			expect(ele).toHaveLength(randomArray.length);
		}
	});
});
