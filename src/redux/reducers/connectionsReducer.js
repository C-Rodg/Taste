// Types
import { UPDATE_CONNECTIONS_OBJECT } from '../types';

// Initial State
const INITIAL_STATE = {
	newMessages: true,
	newConnections: true
};

// JUST A DUMMY REDUCER FOR NOW
export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case UPDATE_CONNECTIONS_OBJECT:
			return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
}
