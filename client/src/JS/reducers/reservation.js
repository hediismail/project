import {
	LOAD_RESERVATION,
	FAIL_RESERVATION,
	GET_REQUEST_RESERVATION,
	GET_ACCEPTED_RESERVATION,
} from '../const/reservation';
const initialState = {
	loadReservation: false,
	error: null,
	reservations: null,
	reservation: {},
};

export const reservationReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case LOAD_RESERVATION:
			return { ...state, loadReservation: true };
		case GET_REQUEST_RESERVATION:
			return {
				...state,
				loadReservation: false,
				reservations: payload,
			};
		case GET_ACCEPTED_RESERVATION:
			return { ...state, loadReservation: false, reservations: payload };
		case FAIL_RESERVATION:
			return { ...state, loadReservation: false, error: payload };
		default:
			return state;
	}
};
