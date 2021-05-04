import * as React from 'react';
import { shallow } from 'enzyme';
import ChartVisualize from '../../components/ChartVisualize';

describe('<ChartVisualize />', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<ChartVisualize />);
		expect(wrapper).toMatchSnapshot();
	});
});
