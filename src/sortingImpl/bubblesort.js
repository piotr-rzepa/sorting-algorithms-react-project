const bubbleSortAsc = ([...arr]) => {
	let swap;
	let n = arr.length - 1;
	do {
		swap = false;
		for (let i = 0; i < n; ++i) {
			if (arr[i] > arr[i + 1]) {
				const temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swap = true;
			}
		}
		--n;
	} while (swap);
	//return arr;
	return arr;
};

const bubbleSortDesc = ([...arr]) => {
	let swap;
	let n = arr.length - 1;
	do {
		swap = false;
		for (let i = 0; i < n; ++i) {
			if (arr[i] < arr[i + 1]) {
				const temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swap = true;
			}
		}
		--n;
	} while (swap);
	//return arr;
	return arr;
};

function* bubbleSortGen(arr) {
	let swap;
	let n = arr.length - 1;
	do {
		yield arr;
		swap = false;
		for (let i = 0; i < n; ++i) {
			if (arr[i] > arr[i + 1]) {
				const temp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = temp;
				swap = true;
			}
		}
		--n;
	} while (swap);
}

export { bubbleSortAsc, bubbleSortDesc, bubbleSortGen };
