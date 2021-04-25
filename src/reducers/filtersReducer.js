//* REDUCER -> HOW ACTIONS TRANSFORM STATE INTO NEXT STATE
const filtersReducerDefault = { searchText: '', sort: 'desc' };
const filtersReducer = (state = filtersReducerDefault, action) => {
	switch (action.type) {
	case 'SET_TEXT_FILTER':
		return { ...state, searchText: action.payload.searchText };
	case 'SET_SORT_ASC':
		return { ...state, sort: 'asc' };
	case 'SET_SORT_DESC':
		return { ...state, sort: 'desc' };
	default:
		return { ...state };
	}
};

export default filtersReducer;
