import * as React from 'react';
import { shallow } from 'enzyme';
import * as reactRedux from 'react-redux';
import ChartPie from '../../components/ChartPie';
import { Tooltip } from 'recharts';

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

describe('<ChartPie />', () => {
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
		const wrapper = shallow(<ChartPie />);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should format ToolTip correctly', () => {
		const dummyDispatch = jest.fn();
		useContextMock.mockReturnValue(dummyDispatch);
		useSelectorMock.mockReturnValue([{ name: 'Bubble Sort', method: 'XD' }]);
		const wrapper = shallow(<ChartPie />);
		const result = wrapper.find(Tooltip).prop('formatter')(10, 0);
		expect(result).toMatchSnapshot();
	});

	it('should choose correct black theme', () => {
		useContextMock.mockReturnValue(true);
		useSelectorMock.mockReturnValue(data);
		const wrapper = shallow(<ChartPie />);
		expect(wrapper.find('div.card-chart').get(0).props.style).toHaveProperty(
			'color',
			'white'
		);
	});

	it('should choose correct white theme', () => {
		useContextMock.mockReturnValue(false);
		useSelectorMock.mockReturnValue(data);
		const wrapper = shallow(<ChartPie />);
		expect(wrapper.find('div.card-chart').get(0).props.style).toHaveProperty(
			'backgroundColor',
			'white'
		);
	});
});
