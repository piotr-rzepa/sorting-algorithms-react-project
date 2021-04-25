const insertionSortAsc = (originalArray) => {
	const array = [...originalArray];
	const n = array.length;
	// Go through all array elements...
	for (let i = 1; i < n; i += 1) {
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
