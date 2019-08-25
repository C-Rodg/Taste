// Libraries
import AsyncStorage from '@react-native-community/async-storage';

// Types
import { SET_JWT_TOKEN } from '../types';

// Keys
import { JWT_TOKEN_KEY } from '../../config/config';

// Save JWT Token to local and store in state
export const saveJwtToken = token => {
	return async dispatch => {
		try {
			await AsyncStorage.setItem(JWT_TOKEN_KEY, token);
			dispatch(setJwtToken(token));
		} catch (err) {
			// TODO: Handle error
		}
	};
};

// Store in state
export const setJwtToken = token => {
	return { type: SET_JWT_TOKEN, payload: token };
};
