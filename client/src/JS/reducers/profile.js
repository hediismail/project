import {
  GET_PROFILEBYID,
  GET_PROFILES,
  GET_PROFILES_FAIL,
  GET_PROFILES_SUCCESS,
  REGISTER_PROFILE,
  EDIT_PROFILE,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL
} from '../const/profile'

const initialState = {
  profile: [],
  profiles: [],
  loadprofiles: false,
  loadprofiles:false,
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
      // edite profile 
      case EDIT_PROFILE:
        return { ...state, loadProfile: true };
      case EDIT_PROFILE_SUCCESS:
        return { ...state, loadProfile: false, profile: payload };
      case EDIT_PROFILE_FAIL:
        return { ...state, loadProfile: false, errors: payload };

    default:
      return state
  }
}
