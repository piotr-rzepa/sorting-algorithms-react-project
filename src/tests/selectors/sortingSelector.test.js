import selector, {
	selectSortedPositions
} from '../../selectors/sortingSelector';
const data = [
	{
		id: 0,
		name: 'Bubble Sort',
		description:
			'Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm',
		method: 'Exchanging',
		sortingTime: { best: 0, worst: 0, average: 1 }
	},
	{
		id: 1,
		name: 'Quick Sort',
		description: 'Quicksort is a divide-and-conquer algorithm.',
		method: 'Partitioning',
		sortingTime: { best: 0, worst: 0, average: 2 }
	}
];

let mockFnFilter, mockFnAlgo;
beforeEach(() => {
	mockFnFilter = jest.fn().mockImplementation((filter) => filter);
	mockFnAlgo = jest.fn().mockImplementation(() => data);
});

test('Should sort algorithms in ascending order', () => {
	const result = selector.resultFunc(mockFnFilter('asc'), mockFnAlgo());
	expect(result).toEqual(data);
	expect(result).toEqual(expect.any(Array));
	expect(result.length).toBe(data.length);
});

test('Should sort algorithms in descending order', () => {
	const result = selector.resultFunc(mockFnFilter('desc'), mockFnAlgo());
	expect(result).toEqual([data[1], data[0]]);
	expect(result).toEqual(expect.any(Array));
	expect(result.length).toBe(data.length);
});

test('Should sort algorithms only in ascending order', () => {
	const result = selectSortedPositions.resultFunc(mockFnAlgo());
	expect(result).toEqual(data);
	expect(result).toEqual(expect.any(Array));
	expect(result.length).toBe(data.length);
});
