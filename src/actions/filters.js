/*
 * AKCJE DO FILTROWANIA WYNIKÓW WYSZUKIWANIA I SORTOWANIA LISTY ALGORYTMÓW
 */

export const setTextFilter = (filterText) => {
	return {
		type: 'SET_TEXT_FILTER',
		payload: {
			searchText: filterText
		}
	};
};
export const setSortingAsc = () => {
	return {
		type: 'SET_SORT_ASC',
		payload: { sort: 'asc' }
	};
};
export const setSortingDesc = () => {
	return {
		type: 'SET_SORT_DESC',
		payload: { sort: 'desc' }
	};
};
