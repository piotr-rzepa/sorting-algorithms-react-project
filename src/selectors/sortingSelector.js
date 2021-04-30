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

//* Selektor do zwracania pozycji danego algorytmu sortowania w zalezności od jego czasu
const selectSortedPositions = createSelector([getAlgorithms], (algorithms) => {
	return [...algorithms].sort((a, b) =>
		a.sortingTime.average < b.sortingTime.average ? -1 : 1
	);
});

export default selectSortedAlgorithms;
export { selectSortedPositions };
