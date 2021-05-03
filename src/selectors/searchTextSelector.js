import { createSelector } from 'reselect';

//? Seleketor wybierania algorytmów w listy po wpisaniu tekstu -> WAŻNE SHALLOW COPY [... ]

export const getSearchText = (state) => state.filters.searchText;
export const getAlgorithms = (state) => state.algorithms;

const selectSearchText = createSelector(
	[getSearchText, getAlgorithms],
	(searchText, algorithms) => {
		return [...algorithms].filter(
			(ele) => ele.name.toLowerCase().includes(searchText) && searchText !== ''
		);
	}
);

export default selectSearchText;
