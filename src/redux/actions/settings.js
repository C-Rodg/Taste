// Libraries
import AsyncStorage from '@react-native-community/async-storage';

// Types
import { SET_JWT_TOKEN } from '../types';

// Keys
import { JWT_TOKEN } from '../../config/config';

// Save JWT Token to local and store in state
export const saveJwtToken = token => {
	return async dispatch => {
		try {
			await AsyncStorage.setItem(JWT_TOKEN, token);
			dispatch({ type: SET_JWT_TOKEN, payload: token });
		} catch (err) {
			// TODO: Handle error
		}
	};
};
