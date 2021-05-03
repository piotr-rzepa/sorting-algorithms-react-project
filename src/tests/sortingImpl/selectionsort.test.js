import {
	selectionSortAsc,
	selectionSortDesc,
	selectionSortGen
} from '../../sortingImpl/selectionsort';

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
		const bubbleSorted = selectionSortAsc(randomArray);
		expect(bubbleSorted).toEqual(sortedAscending);
	});

	it('should return sorted collection in descending order', () => {
		const bubbleSorted = selectionSortDesc(randomArray);
		expect(bubbleSorted).toEqual(sortedDescending);
	});

	it('should render each step until array is sorted', () => {
		const gen = selectionSortGen(randomArray);
		for (const ele of gen) {
			expect(ele).toHaveLength(randomArray.length);
		}
	});
});
