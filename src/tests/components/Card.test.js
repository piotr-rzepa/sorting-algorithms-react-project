import * as React from 'react';
import { shallow } from 'enzyme';
import Card from '../../components/Card';

const data = {
	title: 'main-title-test',
	subtitle: 'subtitle-test',
	icon: undefined,
	background: { color: 'white' }
};

describe('<Card />', () => {
	const useContextMock = jest.spyOn(React, 'useContext');
	beforeEach(() => {
		useContextMock.mockClear();
	});
	it('renders correctly', () => {
		const wrapper = shallow(<Card props={data} />);
		expect(wrapper).toMatchSnapshot();
	});

	it('should choose correct theme', () => {
		useContextMock.mockReturnValue(true);
		const wrapper = shallow(<Card props={data} />);
		expect(wrapper.find('div.Card').get(0).props.style).toHaveProperty(
			'color',
			'white'
		);
	});
});
