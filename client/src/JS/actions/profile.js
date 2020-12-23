import { GET_PROFILEBYID, GET_PROFILES, GET_PROFILES_FAIL, GET_PROFILES_SUCCESS, REGISTER_PROFILE, GET_PROFILEBYID_SUCCESS ,GET_PROFILEBYID_FAIL } from '../const/profile'
import axios from 'axios';
export const registerProfile = (profile, history) => async (dispatch) => {
  try {
    const result = await axios.post(`/profile/editprofile`, profile, {
      headers: {
        authorization: localStorage.getItem('token'),
      },
    })
    dispatch({ type: REGISTER_PROFILE, payload: result.data })
    history.push('/')

  } catch (error) {
    console.log(error);
  }
};
//GET PROFILES

export const getprofiles=()=>async (dispatch) =>{
  dispatch({type:GET_PROFILES})
  try { 
      let result= await axios.get("/profile")
      dispatch({type:GET_PROFILES_SUCCESS,payload:result.data})
  
  } catch (error) { 
      dispatch({type:GET_PROFILES_FAIL,payload:error})
      
  }
   }
  
  // GET PROFLE BY ID 
     export const getprofilebyid=(_id)=>async (dispatch) =>{
      // dispatch({type:GET_PROFILEBYID})
      try { 
          let result= await axios.get(`/profile/${_id}`,{ headers: {
            authorization: localStorage.getItem('token'),
          }})
          dispatch({type:GET_PROFILEBYID,payload:result.data})
          console.log(result)
      
      } catch (error) { 
          // dispatch({type:GET_PROFILEBYID_FAIL,payload:error})
          console.log(error)
          
      }
       }
  

