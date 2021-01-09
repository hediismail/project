import { LOAD_USER, REGISTER_USER, LOGIN_USER, FAIL_USER, LOGOUT_USER, CURRENT_USER } from '../const/user';

import axios from 'axios';

export const registerUser = (user, history) => async (dispatch) => {
	dispatch({ type: LOAD_USER });
	try {
		const result = await axios.post('/user/register', user);
		dispatch({ type: REGISTER_USER, payload: result.data });
		console.log(result.data.user.role);
		if (result.data.user.role === 'Artist') {
			history.push(`/addprofile`);
		} else {
			history.push('/');
		}
	} catch (error) {
		const { errors, msg } = error.response.data;
		if (Array.isArray(errors)) {
			errors.forEach((err) => alert(err.msg));
		}
		if (msg) {
			alert(msg);
		}
	}
};

export const loginUser = (user, history) => async (dispatch) => {
	dispatch({ type: LOAD_USER });
	try {
		const result = await axios.post('/user/login', user);
		//{user,msg,token}
		dispatch({ type: LOGIN_USER, payload: result.data });
		history.push('/');
	} catch (error) {
		const { errors, msg } = error.response.data;
		if (Array.isArray(errors)) {
			errors.forEach((err) => alert(err.msg));
		}
		if (msg) {
			alert(msg);
		}
	}
};

export const current = () => async (dispatch) => {
	dispatch({ type: LOAD_USER });
	const options = {
		headers: {
			authorization: localStorage.getItem('token'),
		},
	};
	try {
		let result = await axios.get('/user/current', options);
		//  user
		dispatch({ type: CURRENT_USER, payload: result.data.user });
	} catch (error) {
		dispatch({ type: FAIL_USER, payload: error.response.data });
	}
};

export const logout = () => {
	return {
		type: LOGOUT_USER,
	};
};
