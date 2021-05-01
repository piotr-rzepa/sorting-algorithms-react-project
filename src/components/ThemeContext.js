/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useContext, createContext } from 'react';

//Tworzymy kontekst do przekazywania informacji o trybie jasnym/ciemnym
export const ThemeContext = createContext();
//Tworzymy kontekst do ustawiania trybu -> pod przyciskiem na pasku wertykalnym
export const ThemeContextUpdate = createContext();

//Komponent który będzie zapewniał wszystkim {children} dostęp do informacji o motywie
export const ThemeProvider = ({ children }) => {
	const [darkTheme, setDarkTheme] = useState(false);

	//Metoda do zmieany stylu
	const updateContext = () => setDarkTheme((prevTheme) => !prevTheme);

	return (
		<ThemeContext.Provider value={darkTheme}>
			<ThemeContextUpdate.Provider value={updateContext}>
				{children}
			</ThemeContextUpdate.Provider>
		</ThemeContext.Provider>
	);
};
