import * as React from 'react';
import { shallow } from 'enzyme';
import * as reactRedux from 'react-redux';
import AlgorithmList from '../../components/AlgoList';
import AlgorithmListItem from '../../components/AlgoListItem';
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

describe('<AlgorithmList />', () => {
	const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
	const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
	const useContextMock = jest.spyOn(React, 'useContext');
	beforeEach(() => {
		useDispatchMock.mockClear();
		useSelectorMock.mockClear();
		useContextMock.mockClear();
	});

	it('Should render AlgorithmList correctly', () => {
		const dummyDispatch = jest.fn();
		useDispatchMock.mockReturnValue(dummyDispatch);
		useSelectorMock.mockReturnValue(data);
		const wrapper = shallow(<AlgorithmList />);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should render expected amount of children item components', () => {
		const dummyDispatch = jest.fn();
		useDispatchMock.mockReturnValue(dummyDispatch);
		useSelectorMock.mockReturnValue(data);
		const wrapper = shallow(<AlgorithmList />);
		expect(wrapper.find(AlgorithmListItem)).toHaveLength(2);
		expect(wrapper.find(AlgorithmListItem).get(0).props.name).toBe('Bubble Sort');
	});

	it('Should render children in correct order (descending)', () => {
		const dummyDispatch = jest.fn();
		useDispatchMock.mockReturnValue(dummyDispatch);
		useSelectorMock.mockReturnValue(data);
		const wrapper = shallow(<AlgorithmList />);
		expect(wrapper.find(AlgorithmListItem).get(0).props.name).toBe('Bubble Sort');
	});

	it('Should handle change of sorting order to asc', () => {
		const dummyDispatch = jest.fn();
		useDispatchMock.mockReturnValue(dummyDispatch);
		useSelectorMock.mockReturnValue(data);
		const wrapper = shallow(<AlgorithmList />);
		wrapper
			.find('select')
			.at(0)
			.simulate('change', { target: { value: 'Ascending' } });
		expect(dummyDispatch.mock.calls[0][0]).toEqual({
			type: 'SET_SORT_ASC',
			payload: { sort: 'asc' }
		});
	});

	it('Should handle change of sorting order to desc', () => {
		const dummyDispatch = jest.fn();
		useDispatchMock.mockReturnValue(dummyDispatch);
		useSelectorMock.mockReturnValue(data);
		const wrapper = shallow(<AlgorithmList />);
		wrapper
			.find('select')
			.at(0)
			.simulate('change', { target: { value: 'Descending' } });
		expect(dummyDispatch.mock.calls[0][0]).toEqual({
			type: 'SET_SORT_DESC',
			payload: { sort: 'desc' }
		});
	});

	it('should choose correct theme', () => {
		useContextMock.mockReturnValue(true);
		const dummyDispatch = jest.fn();
		useDispatchMock.mockReturnValue(dummyDispatch);
		useSelectorMock.mockReturnValue(data);
		const wrapper = shallow(<AlgorithmList />);
		expect(wrapper.find('div.algorithm-list').get(0).props.style).toHaveProperty(
			'color',
			'white'
		);
	});
});
