import { combineReducers } from 'redux';

import userReducer from './userReducer';
import datesReducer from './datesReducer';
import connectionsReducer from './connectionsReducer';

const rootReducer = combineReducers({
	user: userReducer,
	dates: datesReducer,
	connections: connectionsReducer
});

export default rootReducer;
