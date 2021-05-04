import * as React from 'react';
import { shallow } from 'enzyme';
import AlgorithmListItem from '../../components/AlgoListItem';
import { Link } from 'react-router-dom';
const data = [
	{
		id: 0,
		name: 'Bubble Sort',
		description:
			'Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm',
		method: 'Exchanging',
		sortingTime: { best: 0, worst: 0, average: 10 }
	},
	{
		id: 1,
		name: 'Quick Sort',
		description: 'Quicksort is a divide-and-conquer algorithm.',
		method: 'Partitioning',
		sortingTime: { best: 0, worst: 0, average: 100 }
	}
];

describe('<AlgorithmListItem />', () => {
	const useContextMock = jest.spyOn(React, 'useContext');
	beforeEach(() => {
		useContextMock.mockClear();
	});

	it('renders correctly', () => {
		const wrapper = shallow(
			<AlgorithmListItem
				key={data[0].id}
				name={data[0].name}
				sortingTime={data[0].sortingTime}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('should choose correct theme', () => {
		useContextMock.mockReturnValue(true);
		const wrapper = shallow(
			<AlgorithmListItem
				key={data[0].id}
				name={data[0].name}
				sortingTime={data[0].sortingTime}
			/>
		);
		expect(wrapper.find(Link).get(0).props.style).toHaveProperty(
			'color',
			'white'
		);
	});
});
