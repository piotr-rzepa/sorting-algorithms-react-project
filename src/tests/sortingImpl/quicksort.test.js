import {
	quickSortAsc,
	quickSortDesc,
	quickSortGen,
	swap
} from '../../sortingImpl/quicksort';

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
		const bubbleSorted = quickSortAsc(randomArray);
		expect(bubbleSorted).toEqual(sortedAscending);
	});

	it('should return sorted collection in descending order', () => {
		const bubbleSorted = quickSortDesc(randomArray);
		expect(bubbleSorted).toEqual(sortedDescending);
	});

	it('should render each step until array is sorted', () => {
		const gen = quickSortGen(randomArray);
		for (const ele of gen) {
			expect(ele).toHaveLength(randomArray.length);
		}
	});

	it('Should swap two items correctly', () => {
		const data = [-1, 1];
		const prevData = [data[1], data[0]];
		swap(data, 0, 1);
		expect(data).toEqual(expect.any(Array));
		expect(data).toEqual(prevData);
	});
});
