//* REDUCER -> HOW ACTIONS TRANSFORM STATE INTO NEXT STATE
const testsReducerDefault = {
	datasetSize: 100,
	arrayStartSize: 100,
	dataOrder: 'random',
	sortingOrder: 'desc',
	arrayEndSize: 1000
};
const testsReducer = (state = testsReducerDefault, action) => {
	switch (action.type) {
	case 'SET_SIZE_DATASET':
		return { ...state, datasetSize: action.payload.datasetSize };
	case 'SET_SIZE_ARRAY':
		return { ...state, arrayStartSize: action.payload.arrayStartSize };
	case 'SET_DATA_ORDER':
		return { ...state, dataOrder: action.payload.dataOrder };
	case 'SET_SORTING_ODER':
		return { ...state, sortingOrder: action.payload.sortingOrder };
	case 'SET_ARRAY_GAIN':
		return { ...state, arrayEndSize: action.payload.arrayEndSize };
	default:
		return { ...state };
	}
};

export default testsReducer;
