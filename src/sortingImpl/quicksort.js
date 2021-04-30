/* eslint-disable no-unused-vars */
const quickSortAsc = (originalArr) => {
	const arr = [...originalArr];
	if (arr.length <= 1) {
		return arr;
	}
	//Tablica wartości < pivot
	const leftPart = [];
	//Tablica wartości > pivot
	const rightPart = [];
	//Element rozdzielający -> Wybieramy pierwszy i usuwamy go z listy
	//Tworzymy z pivota osobną 1-elementową tablicę
	const pivot = arr.shift();
	const center = [pivot];
	//Dodajemy wartości do odpowiednich tablic
	while (arr.length) {
		const currElement = arr.shift();
		if (currElement === pivot) {
			center.push(currElement);
		} else if (currElement < pivot) {
			leftPart.push(currElement);
		} else rightPart.push(currElement);
	}

	//Rekursywnie przeprowadzamy sortowanie podtablic
	const leftArraySorted = quickSortAsc(leftPart);
	const rightArraySorted = quickSortAsc(rightPart);
	return [...leftArraySorted, ...center, ...rightArraySorted];
};

const quickSortDesc = (originalArr) => {
	const arr = [...originalArr];
	if (arr.length <= 1) {
		return arr;
	}
	const leftPart = [];
	const rightPart = [];
	const pivot = arr.shift();
	const center = [pivot];
	while (arr.length) {
		const currElement = arr.shift();
		if (currElement === pivot) {
			center.push(currElement);
		} else if (currElement < pivot) {
			rightPart.push(currElement);
		} else leftPart.push(currElement);
	}

	const leftArraySorted = quickSortDesc(leftPart);
	const rightArraySorted = quickSortDesc(rightPart);
	return [...leftArraySorted, ...center, ...rightArraySorted];
};

function swap(items, firstIndex, secondIndex) {
	var temp = items[firstIndex];
	items[firstIndex] = items[secondIndex];
	items[secondIndex] = temp;
}

function* partition(items, left, right) {
	var pivot = items[Math.floor((right + left) / 2)];
	while (left <= right) {
		while (items[left] < pivot) {
			left++;
		}
		while (items[right] > pivot) {
			right--;
		}
		if (left <= right) {
			swap(items, left, right);
			left++;
			right--;
		}
		yield true;
	}
	return left;
}

function* generatorQuickSort(items, left, right) {
	var index;
	if (items.length > 1) {
		left = typeof left !== 'number' ? 0 : left;
		right = typeof right !== 'number' ? items.length - 1 : right;
		index = yield* partition(items, left, right);
		if (left < index - 1) {
			yield* generatorQuickSort(items, left, index - 1);
		}
		if (index < right) {
			yield* generatorQuickSort(items, index, right);
		}
	}
	return items;
}

function* quickSortGen(items) {
	let copy = items.slice();
	for (let _ of generatorQuickSort(copy)) {
		yield copy;
	}
}

export { generatorQuickSort, quickSortAsc, quickSortDesc, quickSortGen };
