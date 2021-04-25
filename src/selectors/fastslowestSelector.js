import { createSelector } from 'reselect';

//? Seleketor do zwracania najszybszego i najwolniejszego algorytmu pod względem sortowania-> WAŻNE SHALLOW COPY [... ]

const getAlgorithms = (state) => state.algorithms;

const selectFastestSlowestAlgo = createSelector(getAlgorithms, (algorithms) => {
	const timesArray = [...algorithms].sort((a, b) =>
		a.sortingTime.average > b.sortingTime.average ? 1 : -1
	);
	const average =
		[...algorithms].reduce(
			(acc, currValue) => acc + parseFloat(currValue.sortingTime.average, 10),
			0
		) / algorithms.length;
	return [timesArray[0].name, timesArray[timesArray.length - 1].name, average];
});

export default selectFastestSlowestAlgo;
