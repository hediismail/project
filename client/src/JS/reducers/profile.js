import { REGISTER_PROFILE } from '../const/profile'

const initialState = {
  profile: null,
}

export const profileReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_PROFILE:
      return { ...state, profile: payload.profile }

    default:
      return state
  }
}
