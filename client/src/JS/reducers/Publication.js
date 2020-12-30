import {
  LOAD_PUBLICATION,
  ADD_PUBLICATION_FAILED,
  GET_PUBLICATION_SUCCESS,
  GET_PUBLICATION_FAILED,
  GET_PUBLICATION_BY_ID,
  ADD_PUBLICATION_SUCCESS,
  DELETE_PUBLICATION,
  UPDATE_PUBLICATION,
} from "../const/Publication";
const initialState = {
  publication: {},
  publications: [],
  loadPublications: false,
  errors: null,
};
//   GET_PUBLICATION_SUCCESS,
//   GET_PUBLICATION_FAILED,
//   GET_PUBLICATION_BY_ID,
//   ADD_PUBLICATION_SUCCESS,

export const publicationReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PUBLICATION_SUCCESS:
      // localStorage.getItem("token", payload.token);
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

    // case ADD_PUBLICATION_FAILED:
    //   return { ...state, loadPublications: false, errors: payload };

    // case GET_PUBLICATION_BY_ID:
    //   // localStorage.getItem("token", payload.token);
    //   return { ...state, publications: payload.publications };

    case DELETE_PUBLICATION:
      localStorage.getItem("token", payload.token);
      return { ...state };

    case UPDATE_PUBLICATION:
      localStorage.getItem("token", payload.token);
      return { ...state };

    default:
      return state;
  }
};
