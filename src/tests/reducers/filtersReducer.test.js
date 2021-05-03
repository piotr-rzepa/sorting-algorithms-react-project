import filtersReducer, {
	filtersReducerDefault
} from '../../reducers/filtersReducer';

const textFilterData = {
	type: 'SET_TEXT_FILTER',
	payload: {
		searchText: 'test'
	}
};

const sortAscData = {
	type: 'SET_SORT_ASC',
	payload: {
		sort: 'asc'
	}
};

const sortDescData = {
	type: 'SET_SORT_DESC',
	payload: {
		sort: 'desc'
	}
};

const invalidType = {
	type: 'SOME_INVALID_ACTION_TYPE'
};

test('Should setup default reducer\'s filter state', () => {
	const state = filtersReducer(undefined, { type: '@@INIT' });
	expect(state).toEqual(filtersReducerDefault);
});

test('Should setup search text filter', () => {
	const state = filtersReducer(undefined, textFilterData);
	expect(state.searchText).toEqual(textFilterData.payload.searchText);
	expect(state.searchText).toEqual(expect.any(String));
});

test('Should setup sort in ascending order', () => {
	const state = filtersReducer(undefined, sortAscData);
	expect(state.sort).toEqual(sortAscData.payload.sort);
	expect(state.sort).toEqual(expect.any(String));
});

test('Should setup sort in descending order', () => {
	const state = filtersReducer(undefined, sortDescData);
	expect(state.sort).toEqual(sortDescData.payload.sort);
	expect(state.sort).toEqual(expect.any(String));
});

test('Should not modify state of the reducer', () => {
	const state = filtersReducer(undefined, invalidType);
	expect(state).toEqual(filtersReducerDefault);
});
