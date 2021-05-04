import * as React from 'react';
import * as reactRedux from 'react-redux';
import { shallow } from 'enzyme';
import Dashboard from '../../components/Dashboard';
import SettingsModal from '../../components/SettingsModal';
import Card from '../../components/Card';
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

jest.mock('../../selectors/fastslowestSelector', () => {
	jest.fn().mockImplementation(() => data);
});

describe('<Dashboard />', () => {
	const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
	const useContextMock = jest.spyOn(React, 'useContext');
	const useStateMock = jest.spyOn(React, 'useState');
	const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
	beforeEach(() => {
		useSelectorMock.mockClear();
		useContextMock.mockClear();
		useStateMock.mockClear();
		useDispatchMock.mockClear();
	});
	it('Should render component correctly', () => {
		useSelectorMock.mockImplementation(() => [0, 0, 0]);
		useContextMock.mockReturnValue(jest.fn());
		useStateMock.mockReturnValue([true, jest.fn()]);
		const wrapper = shallow(<Dashboard />);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should call selectors crrectly', () => {
		useSelectorMock.mockImplementation(() => [0, 0, 0]);
		useContextMock.mockReturnValue(jest.fn());
		useStateMock.mockReturnValue([true, jest.fn()]);
		shallow(<Dashboard />);
		expect(useSelectorMock).toHaveBeenCalled();
		expect(useContextMock).toHaveBeenCalled();
		expect(useStateMock).toHaveBeenCalled();
	});

	it('Should open modal correctly', () => {
		const setStateMock = jest.fn();
		useSelectorMock.mockImplementation(() => [0, 0, 0]);
		useContextMock.mockReturnValue(jest.fn());
		useStateMock.mockReturnValue([true, setStateMock]);
		const wrapper = shallow(<Dashboard />);
		wrapper.find('button').at(0).simulate('click');
		expect(setStateMock).toHaveBeenCalled();
	});

	it('Should close modal correctly', () => {
		const setStateMock = jest.fn();
		const requestClose = jest.fn();
		useSelectorMock.mockImplementation(() => [0, 0, 0]);
		useContextMock.mockReturnValue(jest.fn());
		useStateMock.mockReturnValue([true, setStateMock]);
		useDispatchMock.mockReturnValue(jest.fn());
		const wrapper = shallow(<Dashboard />);
		wrapper.find('button').at(0).simulate('click');
		const modal = shallow(<SettingsModal onRequestClose={requestClose} />);
		modal.find('button').simulate('click');
		expect(setStateMock).toHaveBeenCalled();
		expect(requestClose).toHaveBeenCalled();
	});

	it('Should render settings modal component with props', () => {
		const setStateMock = jest.fn();
		useSelectorMock.mockImplementation(() => [0, 0, 0]);
		useContextMock.mockReturnValue(jest.fn());
		useStateMock.mockReturnValue([true, setStateMock]);
		useDispatchMock.mockReturnValue(jest.fn());
		const wrapper = shallow(<Dashboard />);
		expect(wrapper.find(SettingsModal).prop('onRequestClose')).toEqual(
			expect.any(Function)
		);
	});

	it('Should invoke settings modal on close correctly', () => {
		const setStateMock = jest.fn();
		useSelectorMock.mockImplementation(() => [0, 0, 0]);
		useContextMock.mockReturnValue(jest.fn());
		useStateMock.mockReturnValue([true, setStateMock]);
		useDispatchMock.mockReturnValue(jest.fn());
		const wrapper = shallow(<Dashboard />);
		wrapper.find(SettingsModal).prop('onRequestClose')();
		expect(setStateMock).toHaveBeenCalledWith(false);
	});

	it('should choose correct theme', () => {
		useContextMock.mockReturnValue(false);
		const setStateMock = jest.fn();
		useSelectorMock.mockImplementation(() => [0, 0, 0]);
		useStateMock.mockReturnValue([true, setStateMock]);
		useDispatchMock.mockReturnValue(jest.fn());
		const wrapper = shallow(<Dashboard />);
		expect(wrapper.find('div.Dashboard').get(0).props.style).toHaveProperty(
			'color',
			'black'
		);
	});

	it('Should return correct algorithms length', () => {
		const setStateMock = jest.fn();
		useSelectorMock.mockImplementation(() => [0, 0, 0]);
		useContextMock.mockReturnValue(jest.fn());
		useStateMock.mockReturnValue([true, setStateMock]);
		useDispatchMock.mockReturnValue(jest.fn());
		const wrapper = shallow(<Dashboard />);
		expect(wrapper.find(Card).at(0).prop('title')).toHaveLength(3);
	});
});
