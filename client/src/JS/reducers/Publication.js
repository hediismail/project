import { LOAD_PUBLICATION, GET_PUBLICATION_SUCCESS, ADD_PUBLICATION_SUCCESS } from '../const/Publication';
const initialState = {
	publication: {},
	publications: [],
	loadPublications: false,
	errors: null,
};

export const publicationReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ADD_PUBLICATION_SUCCESS:
			return {
				...state,
				publication: payload,
			};
		case LOAD_PUBLICATION:
			return { ...state, loadPublications: true };

		case GET_PUBLICATION_SUCCESS:
			return {
				...state,
				loadPublications: false,
				publications: payload.publications,
			};

		default:
			return state;
	}
};
