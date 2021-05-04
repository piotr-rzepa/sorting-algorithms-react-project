import * as React from 'react';
import { shallow } from 'enzyme';
import * as reactRedux from 'react-redux';
import ChartLine from '../../components/ChartLine';

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

describe('<ChartLine />', () => {
	const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
	const useContextMock = jest.spyOn(React, 'useContext');
	beforeEach(() => {
		useSelectorMock.mockClear();
		useContextMock.mockClear();
	});

	it('renders correctly', () => {
		const dummyDispatch = jest.fn();
		useContextMock.mockReturnValue(dummyDispatch);
		useSelectorMock.mockReturnValue(data);
		const wrapper = shallow(<ChartLine />);
		expect(wrapper).toMatchSnapshot();
	});

	it('should have default light style', () => {
		const dummyDispatch = jest.fn();
		useContextMock.mockReturnValue(dummyDispatch);
		useSelectorMock.mockReturnValue(data);
		const wrapper = shallow(<ChartLine />);
		expect(useContextMock).toHaveBeenCalled();
		expect(wrapper.find('div.card-chart').get(0).props.style).toHaveProperty(
			'backgroundColor',
			'#606060'
		);
	});

	it('should choose correct theme', () => {
		useContextMock.mockReturnValue(false);
		useSelectorMock.mockReturnValue(data);
		const wrapper = shallow(<ChartLine />);
		expect(wrapper.find('div.card-chart--big').get(0).props.style).toHaveProperty(
			'color',
			'black'
		);
	});
});
