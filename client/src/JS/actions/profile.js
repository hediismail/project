import {
  GET_PROFILES,
  GET_PROFILES_FAIL,
  GET_PROFILES_SUCCESS,
  REGISTER_PROFILE,
} from "../const/profile";
import axios from "axios";

export const registerProfile = (profile, history) => async (dispatch) => {
  try {
    const result = await axios.post(`/profile/editprofile/:id`, profile);
    //{user,msg,token}
    // localStorage.setItem("token",result.data.token)
    dispatch({ type: REGISTER_PROFILE, payload: result.data });

    history.push("/dashbord");
  } catch (error) {
    console.log(error);
  }
};
//GET PROFILES
export const getprofiles = () => async (dispatch) => {
  dispatch({ type: GET_PROFILES });
  try {
    let result = await axios.get("/api/contact");
    dispatch({ type: GET_PROFILES_SUCCESS, payload: result.data.response });
  } catch (error) {
    dispatch({ type: GET_PROFILES_FAIL, payload: error });
  }
};
