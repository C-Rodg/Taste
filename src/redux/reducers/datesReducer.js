// Types
import { SET_UPCOMING_DATES } from '../types';

// Initial State
const INITIAL_STATE = {
	upcomingDates: ['one', 'two', 'threee']
};

// JUST A DUMMY REDUCER FOR NOW
export default function(state = INITIAL_STATE, action) {
	switch (action.type) {
		case SET_UPCOMING_DATES:
			return {
				...state,
				upcomingDates: action.payload
			};
		default:
			return state;
	}
}
