import { combineReducers } from 'redux';

import userReducer from './userReducer';
import datesReducer from './datesReducer';
import connectionsReducer from './connectionsReducer';
import settingsReducer from './settingsReducer';

const rootReducer = combineReducers({
	user: userReducer,
	dates: datesReducer,
	connections: connectionsReducer,
	settings: settingsReducer,
});

export default rootReducer;
