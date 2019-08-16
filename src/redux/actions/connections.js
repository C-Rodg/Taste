// Types
import { UPDATE_CONNECTIONS_OBJECT } from '../types';

export const setConnectionsViewed = () => {
	return dispatch => {
		dispatch({
			type: UPDATE_CONNECTIONS_OBJECT,
			payload: {
				newMessages: false,
				newConnections: false
			}
		});
	};
};
