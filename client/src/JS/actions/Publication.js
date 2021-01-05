import {
	GET_PUBLICATION_SUCCESS,
	ADD_PUBLICATION_FAILED,
	GET_PUBLICATION_FAILED,
	ADD_PUBLICATION_SUCCESS,
	UPDATE_PUBLICATION,
	LOAD_PUBLICATION,
} from '../const/Publication';
import axios from 'axios';
// ${_id}
//Add Publication
export const addPublication = (publication, id) => async (dispatch) => {
	try {
		// console.log({ publication });
		const result = await axios.post(`/publication/pub/${id}`, publication, {
			headers: {
				authorization: localStorage.getItem('token'),
				// contentType: "multipart/form-data",
			},
		});
		dispatch({ type: ADD_PUBLICATION_SUCCESS, payload: result.data });
	} catch (error) {
		console.error('error', error);
		dispatch({ type: ADD_PUBLICATION_FAILED, payload: error });
	}
};

// Get all publication
// export const getPublication = () => async (dispatch) => {
//   dispatch({ type: GET_PUBLICATION_SUCCESS });
//   try {
//     let result = await axios.get("/");
//     dispatch({ type: GET_PUBLICATION_SUCCESS, payload: result.data });
//   } catch (error) {
//     dispatch({ type: GET_PUBLICATION_FAILED, payload: error });
//   }
// };

// get all publications of an artist
export const getPublicationById = (_id) => async (dispatch) => {
	dispatch({ type: LOAD_PUBLICATION });
	try {
		const result = await axios.get(`/publication/${_id}`);
		dispatch({ type: GET_PUBLICATION_SUCCESS, payload: result.data });
	} catch (error) {
		dispatch({ type: GET_PUBLICATION_FAILED, payload: error });
	}
};

// delete publication
export const deletePublication = (_id, idProfile) => async (dispatch) => {
	try {
		await axios.delete(`/publication/${_id}`, {
			headers: {
				authorization: localStorage.getItem('token'),
			},
		});
		dispatch(getPublicationById(idProfile));
	} catch (error) {
		dispatch({ type: GET_PUBLICATION_FAILED, payload: error });
	}
};

// update publication
export const updateLike = (_id, like, idProfile) => async (dispatch) => {
	try {
		const result = await axios.put(`/publication/${_id}`, like, {
			headers: {
				authorization: localStorage.getItem('token'),
			},
		});
		dispatch({ type: UPDATE_PUBLICATION, payload: result.data });
		dispatch(getPublicationById(idProfile));
	} catch (error) {
		dispatch({ type: GET_PUBLICATION_FAILED, payload: error });
	}
};
