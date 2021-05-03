import selector from '../../selectors/sortingMethodSelector';

const data = [
	{
		id: 0,
		name: 'Bubble Sort',
		description:
			'Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm',
		method: 'Exchanging',
		sortingTime: { best: 0, worst: 0, average: 0 }
	},
	{
		id: 1,
		name: 'Quick Sort',
		description: 'Quicksort is a divide-and-conquer algorithm.',
		method: 'Partitioning',
		sortingTime: { best: 0, worst: 0, average: 0 }
	}
];

let mockFn;
beforeEach(() => {
	mockFn = jest.fn().mockImplementation(() => data);
});

test('should return an array of algorithms', () => {
	expect(mockFn()).toEqual(data);
});

test('should return array of soritng methods', () => {
	const result = selector.resultFunc(mockFn());
	expect(result).toEqual(expect.any(Array));
	expect(result.length).toBe(2);
	expect(result).toEqual([
		{ method: 'Exchanging', value: 1 },
		{ method: 'Partitioning', value: 1 }
	]);
});

test('should return array of unique elements', () => {
	const result = selector.resultFunc(mockFn());
	const uniqueFunc = (arr) =>
		Array.isArray(arr) && new Set(arr).size === arr.length;
	expect(result).toEqual(expect.any(Array));
	expect(result.length).toBe(2);
	expect(uniqueFunc(result)).toBeTruthy();
});
