import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	ACCOUNT_LOADED,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT
} from '../actions/types';

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	loading: true,
	account: null
};

export default function(state = initialState, action) {
	const { type, payload } = action;

	switch (type) {
		case ACCOUNT_LOADED:
			return {
				...state,
				isAuthenticated: true,
				loading: false,
				account: payload
			};
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			localStorage.setItem('token', payload.token);
			return {
				...state,
				...payload,
				isAuthenticated: true,
				loading: false
			};
		case REGISTER_FAIL:
		case AUTH_ERROR:
		case LOGIN_FAIL:
		case LOGOUT:
			localStorage.removeItem('token');
			return {
				...state,
				...payload,
				token: null,
				isAuthenticated: false,
				loading: false
			};

		default:
			return state;
	}
}
