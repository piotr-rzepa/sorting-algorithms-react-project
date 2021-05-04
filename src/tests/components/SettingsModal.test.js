import * as React from 'react';
import * as reactRedux from 'react-redux';
import { shallow } from 'enzyme';
import SettingsModal from '../../components/SettingsModal';
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
	const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch');
	beforeEach(() => {
		useSelectorMock.mockClear();
		useContextMock.mockClear();
		useDispatchMock.mockClear();
	});
	it('Should render component correctly', () => {
		useSelectorMock.mockReturnValue({
			datasetSize: 100,
			arrayStartSize: 100,
			dataOrder: 'random',
			sortingOrder: 'desc',
			arrayEndSize: 1000
		});
		useContextMock.mockReturnValue(jest.fn());
		const wrapper = shallow(<SettingsModal />);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should dispatch setSizeDataset correctly', () => {
		useSelectorMock.mockReturnValue({
			datasetSize: 100,
			arrayStartSize: 100,
			dataOrder: 'random',
			sortingOrder: 'desc',
			arrayEndSize: 1000
		});
		useContextMock.mockReturnValue(jest.fn());
		useDispatchMock.mockReturnValue((x) => x);
		const wrapper = shallow(<SettingsModal />);
		wrapper.find('input').at(0).prop('onChange')({ target: { value: 10 } });
		expect(useDispatchMock).toHaveBeenCalled();
	});

	it('Should dispatch setArraySize correctly', () => {
		useSelectorMock.mockReturnValue({
			datasetSize: 100,
			arrayStartSize: 100,
			dataOrder: 'random',
			sortingOrder: 'desc',
			arrayEndSize: 1000
		});
		useContextMock.mockReturnValue(jest.fn());
		useDispatchMock.mockReturnValue((x) => x);
		const wrapper = shallow(<SettingsModal />);
		wrapper.find('input').at(1).prop('onChange')({ target: { value: 10 } });
		expect(useDispatchMock).toHaveBeenCalled();
	});

	it('Should dispatch setArrayGain correctly', () => {
		useSelectorMock.mockReturnValue({
			datasetSize: 100,
			arrayStartSize: 100,
			dataOrder: 'random',
			sortingOrder: 'desc',
			arrayEndSize: 1000
		});
		useContextMock.mockReturnValue(jest.fn());
		useDispatchMock.mockReturnValue((x) => x);
		const wrapper = shallow(<SettingsModal />);
		wrapper.find('input').at(2).prop('onChange')({ target: { value: 10 } });
		expect(useDispatchMock).toHaveBeenCalled();
	});

	it('Should dispatch setDataOrder correctly (best)', () => {
		useSelectorMock.mockReturnValue({
			datasetSize: 100,
			arrayStartSize: 100,
			dataOrder: 'random',
			sortingOrder: 'desc',
			arrayEndSize: 1000
		});
		useContextMock.mockReturnValue(jest.fn());
		useDispatchMock.mockReturnValue((x) => x);
		const wrapper = shallow(<SettingsModal />);
		wrapper.find('input').at(3).prop('onChange')({ target: { value: 10 } });
		expect(useDispatchMock).toHaveBeenCalled();
	});

	it('Should change setDataOrder radiobutton (best) "checked" prop to true', () => {
		useSelectorMock.mockReturnValue({
			datasetSize: 100,
			arrayStartSize: 100,
			dataOrder: 'best',
			sortingOrder: 'desc',
			arrayEndSize: 1000
		});
		useContextMock.mockReturnValue(jest.fn());
		useDispatchMock.mockReturnValue((x) => x);
		const wrapper = shallow(<SettingsModal />);
		expect(wrapper.find('input').at(3).prop('checked')).toBe(true);
	});

	it('Should change setDataOrder radiobutton (worst) "checked" prop to true', () => {
		useSelectorMock.mockReturnValue({
			datasetSize: 100,
			arrayStartSize: 100,
			dataOrder: 'worst',
			sortingOrder: 'desc',
			arrayEndSize: 1000
		});
		useContextMock.mockReturnValue(jest.fn());
		useDispatchMock.mockReturnValue((x) => x);
		const wrapper = shallow(<SettingsModal />);
		expect(wrapper.find('input').at(4).prop('checked')).toBe(true);
	});

	it('Should change setDataOrder radiobutton (random) "checked" prop to true', () => {
		useSelectorMock.mockReturnValue({
			datasetSize: 100,
			arrayStartSize: 100,
			dataOrder: 'random',
			sortingOrder: 'desc',
			arrayEndSize: 1000
		});
		useContextMock.mockReturnValue(jest.fn());
		useDispatchMock.mockReturnValue((x) => x);
		const wrapper = shallow(<SettingsModal />);
		expect(wrapper.find('input').at(5).prop('checked')).toBe(true);
	});

	it('Should dispatch setDataOrder correctly (worst)', () => {
		useSelectorMock.mockReturnValue({
			datasetSize: 100,
			arrayStartSize: 100,
			dataOrder: 'random',
			sortingOrder: 'desc',
			arrayEndSize: 1000
		});
		useContextMock.mockReturnValue(jest.fn());
		useDispatchMock.mockReturnValue((x) => x);
		const wrapper = shallow(<SettingsModal />);
		wrapper.find('input').at(4).prop('onChange')({ target: { value: 10 } });
		expect(useDispatchMock).toHaveBeenCalled();
	});

	it('Should dispatch setDataOrder correctly (random)', () => {
		useSelectorMock.mockReturnValue({
			datasetSize: 100,
			arrayStartSize: 100,
			dataOrder: 'random',
			sortingOrder: 'desc',
			arrayEndSize: 1000
		});
		useContextMock.mockReturnValue(jest.fn());
		useDispatchMock.mockReturnValue((x) => x);
		const wrapper = shallow(<SettingsModal />);
		wrapper.find('input').at(5).prop('onChange')({ target: { value: 10 } });
		expect(useDispatchMock).toHaveBeenCalled();
	});

	it('Should dispatch setSortingOrder correctly (asc)', () => {
		useSelectorMock.mockReturnValue({
			datasetSize: 100,
			arrayStartSize: 100,
			dataOrder: 'random',
			sortingOrder: 'desc',
			arrayEndSize: 1000
		});
		useContextMock.mockReturnValue(jest.fn());
		useDispatchMock.mockReturnValue((x) => x);
		const wrapper = shallow(<SettingsModal />);
		wrapper.find('input').at(6).prop('onChange')({ target: { value: 10 } });
		expect(useDispatchMock).toHaveBeenCalled();
	});

	it('Should change setSortingOrder radiobutton (asc) "checked" prop to true', () => {
		useSelectorMock.mockReturnValue({
			datasetSize: 100,
			arrayStartSize: 100,
			dataOrder: 'random',
			sortingOrder: 'asc',
			arrayEndSize: 1000
		});
		useContextMock.mockReturnValue(jest.fn());
		useDispatchMock.mockReturnValue((x) => x);
		const wrapper = shallow(<SettingsModal />);
		expect(wrapper.find('input').at(6).prop('checked')).toBe(true);
	});

	it('Should dispatch setSortingOrder correctly (desc)', () => {
		useSelectorMock.mockReturnValue({
			datasetSize: 100,
			arrayStartSize: 100,
			dataOrder: 'random',
			sortingOrder: 'desc',
			arrayEndSize: 1000
		});
		useContextMock.mockReturnValue(jest.fn());
		useDispatchMock.mockReturnValue((x) => x);
		const wrapper = shallow(<SettingsModal />);
		wrapper.find('input').at(7).prop('onChange')({ target: { value: 10 } });
		expect(useDispatchMock).toHaveBeenCalled();
	});

	it('Should change setSortingOrder radiobutton (desc) "checked" prop to true', () => {
		useSelectorMock.mockReturnValue({
			datasetSize: 100,
			arrayStartSize: 100,
			dataOrder: 'random',
			sortingOrder: 'desc',
			arrayEndSize: 1000
		});
		useContextMock.mockReturnValue(jest.fn());
		useDispatchMock.mockReturnValue((x) => x);
		const wrapper = shallow(<SettingsModal />);
		expect(wrapper.find('input').at(7).prop('checked')).toBe(true);
	});

	it('Should invoke closing modal correctly', () => {
		useSelectorMock.mockReturnValue({
			datasetSize: 100,
			arrayStartSize: 100,
			dataOrder: 'random',
			sortingOrder: 'desc',
			arrayEndSize: 1000
		});
		useContextMock.mockReturnValue(jest.fn());
		useDispatchMock.mockReturnValue((x) => x);
		const onRequestCloseMock = jest.fn(() => true);
		const wrapper = shallow(
			<SettingsModal onRequestClose={onRequestCloseMock} />
		);
		const result = wrapper.find('button').at(0).prop('onClick')();
		expect(result).toMatchSnapshot();
		expect(result).toBe(true);
		expect(result).toBeTruthy();
	});
});
