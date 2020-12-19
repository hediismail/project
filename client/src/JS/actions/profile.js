import { REGISTER_PROFILE } from '../const/profile'
import axios from 'axios'

export const registerProfile = (profile, history) => async (dispatch) => {
  try {
    const result = await axios.post(`/profile/editprofile/:id`, profile)
    //{user,msg,token}
    // localStorage.setItem("token",result.data.token)
    dispatch({ type: REGISTER_PROFILE, payload: result.data })

    history.push('/dashbord')
  } catch (error) {
    console.log(error)
  }
}
