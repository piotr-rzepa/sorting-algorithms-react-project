import {
	setTextFilter,
	setSortingAsc,
	setSortingDesc
} from '../../actions/filters';

test('Should set text filter based on user input', () => {
	const action = setTextFilter('test');
	expect(action).toEqual({
		type: 'SET_TEXT_FILTER',
		payload: {
			searchText: 'test'
		}
	});
});

test('Should set sorting of list in ascending order', () => {
	const action = setSortingAsc();
	expect(action).toEqual({
		type: 'SET_SORT_ASC',
		payload: {
			sort: 'asc'
		}
	});
});

test('Should set sorting of list in descending order', () => {
	const action = setSortingDesc();
	expect(action).toEqual({
		type: 'SET_SORT_DESC',
		payload: {
			sort: 'desc'
		}
	});
});
