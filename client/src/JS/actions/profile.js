import {
  GET_PROFILEBYID,
  GET_PROFILES,
  GET_PROFILES_FAIL,
  GET_PROFILES_SUCCESS,
  REGISTER_PROFILE,
  EDIT_PROFILE,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL,
  TOGGLE_TRUE,
  TOGGLE_FALSE,
} from '../const/profile';
import axios from 'axios';
export const registerProfile = (profile, history) => async (dispatch) => {
  try {
    const result = await axios.post(`/profile/editprofile`, profile, {
      headers: {
        authorization: localStorage.getItem('token'),
        // 'Content-Type': 'multipart/form-data',
      },
    });
    dispatch({type: REGISTER_PROFILE, payload: result.data});
    history.push('/');
  } catch (error) {
    console.log(error);
  }
};
//GET PROFILES

export const getprofiles = () => async (dispatch) => {
  dispatch({type: GET_PROFILES});
  try {
    let result = await axios.get('/profile');
    dispatch({type: GET_PROFILES_SUCCESS, payload: result.data});
  } catch (error) {
    dispatch({type: GET_PROFILES_FAIL, payload: error});
  }
};

// GET PROFLE BY ID
export const getprofilebyid = (_id) => async (dispatch) => {
  // dispatch({type:GET_PROFILEBYID})
  try {
    let result = await axios.get(`/profile/${_id}`, {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    });
    dispatch({type: GET_PROFILEBYID, payload: result.data});
  } catch (error) {
    // dispatch({type:GET_PROFILEBYID_FAIL,payload:error})
    console.log(error);
  }
};
// Toggle
export const ToggleTrue = () => {
  return {
    type: TOGGLE_TRUE,
  };
};
export const ToggleFalse = () => {
  return {
    type: TOGGLE_FALSE,
  };
};
// edite profile
// update profile
// export const editProfile = (user) => async (dispatsh) => {
//   const token = localStorage.getItem("token");

//   dispatsh({ type: EDIT_PROFILE });
//   try {
//     const result = await axios.put(`/profile/${_id}`, user, config);

//     dispatsh({ type: EDIT_PROFILE_SUCCESS, payload: result.data });
//   } catch (error) {
//     dispatsh({
//       type: EDIT_PROFILE_FAIL,
//       payload: error.response.data,
//     });
//   }
// };
export const editProfile = (_id, profile, history) => async (dispatch) => {
  try {
    const result = await axios.put(`/profile/${_id}`, profile, {
      headers: {
        authorization: localStorage.getItem('token'),
        // 'Content-Type': 'multipart/form-data',
      },
    });
    dispatch({type: EDIT_PROFILE, payload: result.data});
    history.push(`/profile/${_id}`);
  } catch (error) {
    console.log(error);
  }
};

export const editCalendrier = (_id, calendrie) => async (dispatch) => {
  try {
    const result = await axios.put(`/profile/calendrier/${_id}`, calendrie, {
      headers: {
        authorization: localStorage.getItem('token'),
        // 'Content-Type': 'multipart/form-data',
      },
    });
    dispatch(getprofilebyid(_id));
    // history.push(`/profile/${_id}`);
  } catch (error) {
    console.log(error);
  }
};
