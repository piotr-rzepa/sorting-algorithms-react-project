const shellSortAsc = (originalArray) => {
	// Prevent original array from mutations.
	const array = [...originalArray];
	// Define a gap distance (sortowanie elementów o ustaloną ilość miejść -> gap)
	let gap = Math.floor(array.length / 2);

	// Until gap is bigger then zero do elements comparisons and swaps.
	while (gap > 0) {
		// Go and compare all distant element pairs.
		for (let i = 0; i < array.length - gap; i += 1) {
			let currentIndex = i;
			let gapShiftedIndex = i + gap;

			while (currentIndex >= 0) {
				// Compare and swap array elements if needed.
				if (array[gapShiftedIndex] < array[currentIndex]) {
					const tmp = array[currentIndex];
					array[currentIndex] = array[gapShiftedIndex];
					array[gapShiftedIndex] = tmp;
				}

				gapShiftedIndex = currentIndex;
				currentIndex -= gap;
			}
		}
		// Gap staje się coraz mniejszy, przez co fragmenty są większe, ale coraz bardziej posortowane
		gap = Math.floor(gap / 2);
	}

	return array;
};
const shellSortDesc = (originalArray) => {
	// Prevent original array from mutations.
	const array = [...originalArray];
	// Define a gap distance.
	let gap = Math.floor(array.length / 2);

	// Until gap is bigger then zero do elements comparisons and swaps.
	while (gap > 0) {
		// Go and compare all distant element pairs.
		for (let i = 0; i < array.length - gap; i += 1) {
			let currentIndex = i;
			let gapShiftedIndex = i + gap;

			while (currentIndex >= 0) {
				// Compare and swap array elements if needed.
				if (array[gapShiftedIndex] > array[currentIndex]) {
					const tmp = array[currentIndex];
					array[currentIndex] = array[gapShiftedIndex];
					array[gapShiftedIndex] = tmp;
				}

				gapShiftedIndex = currentIndex;
				currentIndex -= gap;
			}
		}
		// Shrink the gap.
		gap = Math.floor(gap / 2);
	}
	// Return sorted copy of an original array.
	return array;
};
function* shellSortGen(originalArray) {
	// Prevent original array from mutations.
	const array = [...originalArray];
	// Define a gap distance.
	let gap = Math.floor(array.length / 2);

	// Until gap is bigger then zero do elements comparisons and swaps.
	while (gap > 0) {
		// Go and compare all distant element pairs.
		for (let i = 0; i < array.length - gap; i += 1) {
			let currentIndex = i;
			let gapShiftedIndex = i + gap;

			while (currentIndex >= 0) {
				// Compare and swap array elements if needed.
				if (array[gapShiftedIndex] < array[currentIndex]) {
					const tmp = array[currentIndex];
					array[currentIndex] = array[gapShiftedIndex];
					array[gapShiftedIndex] = tmp;
				}

				gapShiftedIndex = currentIndex;
				currentIndex -= gap;
			}
		}
		// Shrink the gap.
		gap = Math.floor(gap / 2);
		yield array;
	}
}

export { shellSortAsc, shellSortDesc, shellSortGen };
