/*
 * AKCJE DO USTAWIANIA/AKTUALIZOWANIA CZASÓW ALGORYTMU
 */

export const setSortingTimeBest = (name, sortingTime) => {
	return {
		type: 'SET_SORTING_TIME_BEST',
		name,
		payload: { best: sortingTime }
	};
};
export const setSortingTimeWorst = (name, sortingTime) => {
	return {
		type: 'SET_SORTING_TIME_WORST',
		name,
		payload: { worst: sortingTime }
	};
};
export const setSortingTimeAverage = (name, sortingTime) => {
	return {
		type: 'SET_SORTING_TIME_AVERAGE',
		name,
		payload: { average: sortingTime }
	};
};
export const setSortingTime = (name, sortingTime) => {
	return {
		type: 'SET_SORTING_TIME',
		name,
		payload: { ...sortingTime }
	};
};
