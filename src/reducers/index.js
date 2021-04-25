import filtersReducer from './filtersReducer';
import algorithmReducer from './algorithmReducer';
import testsReducer from './testsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	filters: filtersReducer,
	algorithms: algorithmReducer,
	tests: testsReducer
});

export default rootReducer;
