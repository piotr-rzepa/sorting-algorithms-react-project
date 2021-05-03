import selector from '../../selectors/fastslowestSelector';

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
	let mockFn;
	beforeEach(() => {
		/**
		 * implementations of mock functions are reset before each test. So in our case, the mock function was being included in the mocked module at test runtime, but that mock had been reset, so it returned undefined.
		 */
		mockFn = jest.fn().mockImplementation(() => data);
	});

	test('should return an array of algorithms', () => {
		expect(mockFn()).toEqual(data);
		expect(mockFn()).toEqual(expect.any(Array));
	});

	test('should return an array of length 3', () => {
		const actual = selector.resultFunc(mockFn());
		expect(actual).toHaveLength(3);
		expect(actual).toEqual(expect.any(Array));
	});
});

test('should return correct evaluations and algorithms', () => {
	const actual = selector.resultFunc([
		{ name: 'Fastest', sortingTime: { best: 1, worst: 2, average: 1.5 } },
		{ name: 'Slowest', sortingTime: { best: 4, worst: 8, average: 6 } }
	]);
	expect(actual).toHaveLength(3);
	expect(actual).toEqual(expect.any(Array));
	expect(actual).toEqual(['Fastest', 'Slowest', 3.75]);
});
