import { createSelector } from 'reselect';

//? Seleketor sortowania algorytmów na Dashboard po szybkości [rosnąco, malejąco] -> WAŻNE SHALLOW COPY [... ]

const getSortingFilter = (state) => state.filters.sort;
const getAlgorithms = (state) => state.algorithms;

const selectSortedAlgorithms = createSelector(
	[getSortingFilter, getAlgorithms],
	(filter, algorithms) => {
		switch (filter) {
		case 'desc':
			return [...algorithms].sort((a, b) =>
				a.sortingTime.average > b.sortingTime.average ? -1 : 1
			);
		case 'asc':
			return [...algorithms].sort((a, b) =>
				a.sortingTime.average > b.sortingTime.average ? 1 : -1
			);
		default:
			return [...algorithms];
		}
	}
);

export default selectSortedAlgorithms;
