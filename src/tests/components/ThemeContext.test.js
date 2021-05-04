import * as React from 'react';
import { shallow } from 'enzyme';
import { ThemeProvider } from '../../components/ThemeContext';

describe('component handles theme change', () => {
	const setState = jest.fn();
	const useStateMock = (initState) => [initState, setState];
	const createContext = jest.spyOn(React, 'createContext');
	afterEach(() => {
		jest.clearAllMocks();
		createContext.mockClear();
	});
	it('Renders correctly', () => {
		const darkTheme = jest.fn();
		jest.spyOn(React, 'useState').mockImplementation(useStateMock);
		const wrapper = shallow(<ThemeProvider value={darkTheme} />);
		expect(wrapper).toMatchSnapshot();
	});
});
