import {
  GET_PROFILEBYID,
  GET_PROFILES,
  GET_PROFILES_FAIL,
  GET_PROFILES_SUCCESS,
  REGISTER_PROFILE,
  TOGGLE_TRUE,
  TOGGLE_FALSE,
  EDIT_PROFILE,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL
} from '../const/profile'

const initialState = {
  profile: [],
  profiles: [],
  loadprofiles: false,
  editeprofile:false,
}

export const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_PROFILE:
      localStorage.getItem('token', payload.token)
      return { ...state, profile: payload }
    case GET_PROFILES:
      return { ...state, loadprofiles: true }
    case GET_PROFILES_SUCCESS:
      return { ...state, profiles: payload.profiles, loadprofiles: false }
    case GET_PROFILES_FAIL:
      return { ...state, loadprofiles: false, error: payload }
    case GET_PROFILEBYID:
      localStorage.getItem('token', payload.token)
      return { ...state, profile: payload.profile[0]  }
      // toggle true 
      case  TOGGLE_TRUE: 
      // localStorage.getItem('token', payload.token)
      return {...state,editeprofile:true}
      case TOGGLE_FALSE :
        // localStorage.getItem('token', payload.token) 
      return {...state,editeprofile:false}
          
      // edite profile 
      case EDIT_PROFILE:
        return { ...state};
      case EDIT_PROFILE_SUCCESS:
        return { ...state,  profile: payload };
      case EDIT_PROFILE_FAIL:
        return { ...state,  errors: payload };

		default:
			return state;
	}
};
