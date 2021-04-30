const insertionSortAsc = (originalArray) => {
	const array = [...originalArray];
	const n = array.length;

	/**
	 * 4 2 3 5
	 * 2 4 3 5
	 * 2 3 4 5
	 *
	 */
	for (let i = 1; i < n; i += 1) {
		//Wybieramy element ze zbioru
		let currentIndex = i;

		//Dopóki nie natrafimy na element róweny lub większy
		while (
			array[currentIndex - 1] !== undefined &&
			array[currentIndex] < array[currentIndex - 1]
		) {
			// Zamieniamy miejscami elementy
			[array[currentIndex - 1], array[currentIndex]] = [
				array[currentIndex],
				array[currentIndex - 1]
			];

			// Przesuwamy indeks w lewo
			currentIndex -= 1;
		}
	}

	return array;
};

const insertionSortDesc = (originalArray) => {
	const array = [...originalArray];
	const n = array.length;
	// Go through all array elements...
	for (let i = 1; i < n; i += 1) {
		let currentIndex = i;

		// Check if previous element is greater than current element.
		// If so, swap the two elements.
		while (
			array[currentIndex - 1] !== undefined &&
			array[currentIndex] > array[currentIndex - 1]
		) {
			// Swap the elements.
			[array[currentIndex - 1], array[currentIndex]] = [
				array[currentIndex],
				array[currentIndex - 1]
			];

			// Shift current index left.
			currentIndex -= 1;
		}
	}

	return array;
};

function* insertionSortGen(originalArray) {
	const array = [...originalArray];
	const n = array.length;
	// Go through all array elements...
	for (let i = 1; i < n; ++i) {
		let currentIndex = i;

		// Check if previous element is greater than current element.
		// If so, swap the two elements.
		while (
			array[currentIndex - 1] !== undefined &&
			array[currentIndex] < array[currentIndex - 1]
		) {
			// Swap the elements.
			[array[currentIndex - 1], array[currentIndex]] = [
				array[currentIndex],
				array[currentIndex - 1]
			];

			// Shift current index left.
			currentIndex -= 1;
		}
		yield array;
	}
}

export { insertionSortAsc, insertionSortDesc, insertionSortGen };
