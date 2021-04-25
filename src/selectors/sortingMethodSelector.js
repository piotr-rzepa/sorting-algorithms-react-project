import { createSelector } from 'reselect';

//? Seleketor do zwracania spreparowanych danych gotowych do użycia w Pie chart -> Metody sortowania

const getAlgorithms = (state) => state.algorithms;

const selectMethodsOfSorting = createSelector(getAlgorithms, (algorithms) => {
	const set = new Set();
	const data = [];
	//* Dodajemy metodę sortowania każdego algorytmu do setu -> gwarantowane uniknalne wartości
	algorithms.forEach((algorithm) => set.add(algorithm.method));
	//* Dla każdej metody w secie tworzymy tablicę sortowań zawierających daną metodę sortowania i ściągamy długość
	set.forEach((method) =>
		data.push({
			method,
			value: algorithms.filter((m) => m.method === method).length
		})
	);
	//* Na wyjściu otrzymujemy tablicę obiektów zawierających nazwę metody oraz liczbę sortowań z niej korzystających
	return [...data];
});

export default selectMethodsOfSorting;
