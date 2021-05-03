import {
	shellSortAsc,
	shellSortDesc,
	shellSortGen
} from '../../sortingImpl/shellsort';

describe('Bubble sort', () => {
	let randomArray;
	let sortedAscending;
	let sortedDescending;

	beforeEach(() => {
		randomArray = Array.from({ length: 1000 }, () => Math.random());
		sortedAscending = [...randomArray].sort();
		sortedDescending = [...randomArray.sort()].reverse();
	});

	it('should return sorted collection in ascending order', () => {
		const bubbleSorted = shellSortAsc(randomArray);
		expect(bubbleSorted).toEqual(sortedAscending);
	});

	it('should return sorted collection in descending order', () => {
		const bubbleSorted = shellSortDesc(randomArray);
		expect(bubbleSorted).toEqual(sortedDescending);
	});

	it('should render each step until array is sorted', () => {
		const gen = shellSortGen(randomArray);
		for (const ele of gen) {
			expect(ele).toHaveLength(randomArray.length);
		}
	});
});
