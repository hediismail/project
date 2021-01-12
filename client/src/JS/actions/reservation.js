import {
	LOAD_RESERVATION,
	ADD_RESERVATION,
	FAIL_RESERVATION,
	GET_REQUEST_RESERVATION,
	GET_ACCEPTED_RESERVATION,
	ACCEPT_RESERVATION,
	DECLINE_RESERVATION,
} from '../const/reservation';
import axios from 'axios';

export const addReservation = (reservation, id) => async (dispatch) => {
	try {
		const result = await axios.post(`/reservation/${id}`, reservation, {
			headers: {
				authorization: localStorage.getItem('token'),
			},
		});
		dispatch({ type: ADD_RESERVATION, payload: result.data });
	} catch (error) {
		console.log(error);
		dispatch({ type: FAIL_RESERVATION, payload: error });
	}
};

export const getAllRequestReservation = (_id) => async (dispatch) => {
	dispatch({
		type: LOAD_RESERVATION,
	});
	try {
		const result = await axios.get(`/reservation/requests/${_id}`, {
			headers: {
				authorization: localStorage.getItem('token'),
			},
		});
		dispatch({
			type: GET_REQUEST_RESERVATION,
			payload: result.data.reservations,
		});
	} catch (error) {
		dispatch({
			type: FAIL_RESERVATION,
			payload: error.response.data,
		});
	}
};
export const getAllConfirmedReservation = (id_artist) => async (dispatch) => {
	dispatch({
		type: LOAD_RESERVATION,
	});
	try {
		const result = await axios.get(`/reservation/accepted/${id_artist}`);
		dispatch({
			type: GET_ACCEPTED_RESERVATION,
			payload: result.data.reservations,
		});
	} catch (error) {
		dispatch({
			type: FAIL_RESERVATION,
			payload: error.response.data,
		});
	}
};

export const acceptReqReservation = (id_artist, id_reservation) => async (dispatch) => {
	try {
		await axios.post(`/reservation/requests/${id_reservation}`);
		dispatch(getAllRequestReservation(id_artist));
	} catch (error) {
		dispatch({
			type: ACCEPT_RESERVATION,
			payload: error.response.data,
		});
	}
};

export const declineReqReservation = (id_artist, id_reservation) => async (dispatch) => {
	try {
		await axios.delete(`/reservation/requests/${id_reservation}`);
		dispatch(getAllRequestReservation(id_artist));
	} catch (error) {
		dispatch({
			type: DECLINE_RESERVATION,
			payload: error.response.data,
		});
	}
};
