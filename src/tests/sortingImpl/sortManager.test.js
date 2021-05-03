import sortManager, {
	testCaseGenerator,
	evaluateResults,
	dataGenerator
} from '../../sortingImpl/sortManager';

const testArray = [
	{
		best: 1,
		worst: 1,
		average: 1
	},
	{
		best: 1,
		worst: 1,
		average: 1
	},
	{
		best: 1,
		worst: 1,
		average: 1
	},
	{
		best: 1,
		worst: 1,
		average: 1
	},
	{
		best: 1,
		worst: 1,
		average: 1
	}
];

const options = {
	sortingOrder: 'asc',
	arrayStartSize: 100,
	arrayEndSize: 1000,
	dataOrder: 'random'
};

const sort = (arr) => {
	const result = [...arr].sort();
	return result;
};

describe('Sort manager', () => {
	it('should correctly render testcase data', () => {
		const testcase = dataGenerator(
			{ dataOrder: 'random', sortingOrder: 'asc' },
			1000
		);
		expect(testcase.length).toBe(1000);
	});

	it('should correctly evaluate results', () => {
		const [best, average, worst] = evaluateResults(testArray);
		expect(best).toBe('1');
		expect(average).toBe('1');
		expect(worst).toBe('1');
	});

	it('Should generate test cases correctly', () => {
		const gen = testCaseGenerator(options, sort, undefined);
		for (const ele of gen) {
			expect(ele).toEqual(expect.any(Object));
		}
	});

	it('Should return correct test case generator', () => {
		const gen = sortManager('Bubble Sort', options);
		expect(typeof gen).toBe('object');
		expect(gen[Symbol.iterator]).toBeTruthy();
	});
});
