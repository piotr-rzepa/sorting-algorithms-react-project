import * as React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import { ReactComponent as GitHubSVG } from '../../images/github.svg';
import { ReactComponent as InstagramSVG } from '../../images/instagram.svg';
import { ReactComponent as FacebookSVG } from '../../images/facebook.svg';
import { ReactComponent as LogoSVG } from '../../images/logo-p.svg';
import HorizontalNav from '../../components/HorizontalNav';
import * as reactRedux from 'react-redux';

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

describe('<HorizontalNav />', () => {
	const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
	const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');
	const useStateMock = jest.spyOn(React, 'useState');
	const useContextMock = jest.spyOn(React, 'useContext');
	beforeEach(() => {
		useDispatchMock.mockClear();
		useSelectorMock.mockClear();
		useStateMock.mockClear();
		useContextMock.mockClear();
	});

	it('Should render Horizontal navbar correctly', () => {
		const dummyDispatch = jest.fn();
		useDispatchMock.mockReturnValue(dummyDispatch);
		useStateMock.mockImplementation((state) => [state, jest.fn()]);
		useSelectorMock.mockReturnValue(data);
		const wrapper = shallow(<HorizontalNav />);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should render expected amount of children components', () => {
		const dummyDispatch = jest.fn();
		useDispatchMock.mockReturnValue(dummyDispatch);
		useSelectorMock.mockReturnValue(data);
		useStateMock.mockImplementation((state) => [state, jest.fn()]);
		const wrapper = shallow(<HorizontalNav />);
		expect(wrapper.find(GitHubSVG)).toHaveLength(1);
		expect(wrapper.find(InstagramSVG)).toHaveLength(1);
		expect(wrapper.find(FacebookSVG)).toHaveLength(1);
		expect(wrapper.find(LogoSVG)).toHaveLength(1);
		expect(wrapper.find(Link)).toHaveLength(6);
	});

	it('Should set filter correctly based on user input', () => {
		const setState = jest.fn((fn) => fn());
		useDispatchMock.mockReturnValue(() => 'sort');
		useSelectorMock.mockReturnValue(data);
		useStateMock.mockImplementation((state) => [state, setState]);
		const wrapper = shallow(<HorizontalNav />);
		wrapper
			.find('input')
			.at(0)
			.simulate('change', { target: { value: 'sort' } });
		expect(useDispatchMock).toHaveBeenCalled();
	});

	it('Should show dropdown correctly based on user input', () => {
		const setState = jest.fn((fn) => fn());
		useDispatchMock.mockReturnValue(() => 'sort');
		useSelectorMock.mockReturnValue(data);
		useStateMock.mockImplementation((state) => [state, setState]);
		const wrapper = shallow(<HorizontalNav />);
		wrapper
			.find('input')
			.at(0)
			.simulate('change', { target: { value: 'sort' } });
		expect(useDispatchMock).toHaveBeenCalled();
		expect(setState).toBeCalled();
		expect(setState.mock.calls[0][0]).toEqual(expect.any(Function));
		expect(setState.mock.results[0].type).toEqual('return');
		expect(setState.mock.results[0].value).toBeTruthy();
	});

	it('Should hide dropdown if no input is provided', () => {
		const setState = jest.fn((fn) => fn());
		useDispatchMock.mockReturnValue(() => 'sort');
		useSelectorMock.mockReturnValue(data);
		useStateMock.mockImplementation((state) => [state, setState]);
		const wrapper = shallow(<HorizontalNav />);
		wrapper
			.find('input')
			.at(0)
			.simulate('change', { target: { value: '' } });
		expect(useDispatchMock).toHaveBeenCalled();
		expect(setState).toBeCalled();
		expect(setState.mock.calls[0][0]).toEqual(expect.any(Function));
		expect(setState.mock.results[0].type).toEqual('return');
		expect(setState.mock.results[0].value).toBeFalsy();
	});

	it('should choose correct light theme', () => {
		const setStateMock = jest.fn();
		useSelectorMock.mockImplementation(() => [0, 0, 0]);
		useStateMock.mockReturnValue([true, setStateMock]);
		useDispatchMock.mockReturnValue(jest.fn());
		useContextMock.mockReturnValue(false);
		const wrapper = shallow(<HorizontalNav />);
		expect(wrapper.find('div.HorizontalNav').get(0).props.style).toHaveProperty(
			'color',
			'black'
		);
	});
	it('should choose correct black theme', () => {
		const setStateMock = jest.fn();
		useSelectorMock.mockImplementation(() => [0, 0, 0]);
		useStateMock.mockReturnValue([true, setStateMock]);
		useDispatchMock.mockReturnValue(jest.fn());
		useContextMock.mockReturnValue(true);
		const wrapper = shallow(<HorizontalNav />);
		expect(wrapper.find('div.HorizontalNav').get(0).props.style).toHaveProperty(
			'color',
			'white'
		);
	});
});
