import React from 'react';
import { shallow } from 'enzyme';
import VerticalNav from '../../components/VerticalNav';
import { Link } from 'react-router-dom';
import { ReactComponent as DashboardSVG } from '../../images/Dashboard.svg';
import { ReactComponent as SelectedAlgorithmSVG } from '../../images/SortingAlgorithm.svg';
import { ReactComponent as SettingsSVG } from '../../images/settings.svg';

//* Sztuczna implementacja modułu react-router-dom
jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useLocation: () => ({ pathname: 'localhost:3000' })
}));

jest.mock('react', () => ({
	...jest.requireActual('react'),
	useContext: jest.fn().mockImplementation(() => ({ darkTheme: true }))
}));

describe('<VerticalNav />', () => {
	it('Should render Horizontal navbar correctly', () => {
		const wrapper = shallow(<VerticalNav />);
		expect(wrapper).toMatchSnapshot();
	});

	it('Should render expected amount of children components', () => {
		const wrapper = shallow(<VerticalNav />);
		expect(wrapper.find('.wrapper')).toHaveLength(1);
		expect(wrapper.find('.verticalNav')).toHaveLength(1);
		expect(wrapper.find(DashboardSVG)).toHaveLength(1);
		expect(wrapper.find(SelectedAlgorithmSVG)).toHaveLength(1);
		expect(wrapper.find(SettingsSVG)).toHaveLength(1);
		expect(wrapper.find(Link)).toHaveLength(2);
	});

	it('Should handle toggle theme by button click', () => {
		const wrapper = shallow(<VerticalNav />);
		wrapper.find('.settings').simulate('click');
		expect(React.useContext).toHaveBeenCalledTimes(1);
	});

	it('Should have className', () => {
		jest.mock('react-router-dom', () => ({
			...jest.requireActual('react-router-dom'),
			useLocation: () => ({ pathname: 'localhost:3000' })
		}));
		const wrapper = shallow(<VerticalNav />);
		expect(wrapper.find(Link).at(0).hasClass('current')).toEqual(false);
	});

	it('Should not have className', () => {
		jest.mock('react-router-dom', () => ({
			...jest.requireActual('react-router-dom'),
			useLocation: () => ({ pathname: '/algorithm/' })
		}));
		const wrapper = shallow(<VerticalNav />);
		expect(wrapper.find(Link).at(1).hasClass('current')).toEqual(false);
	});
});
