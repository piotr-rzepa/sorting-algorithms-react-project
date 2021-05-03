import selector from '../../selectors/searchTextSelector';

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

describe('testing partial selectors', () => {
	let mockFnSearch;
	let mockFnAlgo;
	beforeEach(() => {
		/**
		 * implementations of mock functions are reset before each test. So in our case, the mock function was being included in the mocked module at test runtime, but that mock had been reset, so it returned undefined.
		 */
		mockFnAlgo = jest.fn().mockImplementation(() => data);
		mockFnSearch = jest.fn().mockImplementation(() => 'quick');
	});

	test('should return an array of algorithms', () => {
		expect(mockFnAlgo()).toEqual(data);
	});
	test('should return a search text filter', () => {
		expect(mockFnSearch()).toEqual(expect.any(String));
	});

	test('Should return list of algorithms matching text filter', () => {
		const result = selector.resultFunc(mockFnSearch(), mockFnAlgo());
		expect(result).toEqual(expect.any(Array));
		expect(result).toEqual([
			{
				id: 1,
				name: 'Quick Sort',
				description: 'Quicksort is a divide-and-conquer algorithm.',
				method: 'Partitioning',
				sortingTime: { best: 0, worst: 0, average: 0 }
			}
		]);
	});
});
