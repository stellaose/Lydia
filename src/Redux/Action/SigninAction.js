import axios from "axios";
import BaseURL from "../../Utils/BaseUrl";
import { SigninType } from "../Type/SigninType";

export const Signin = (email, password, history) => async (dispatch) => {
  dispatch({ type: SigninType.SIGNIN_REQUEST });
  try {
    const { data } = await axios.post(`${BaseURL}/user/login`, {
      email,
      password,
    });
    dispatch({ type: SigninType.SIGNIN_SUCCESS, payload: data });
    // history.push("/");
    localStorage.setItem("userToken", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: SigninType.SIGNIN_FAIL,
      payload: err.message,
    });
  }
};

export const GoogleSignin = (response, history) => async (dispatch) => {
  try{
    const { data } = await axios.post(`${BaseURL}/user/google`, {
      tokenId: response.tokenId
    })

    dispatch({ type: SigninType.GOOGLE_SIGNIN, payload: data });
    history.push("/");
    localStorage.setItem("userToken", JSON.stringify(data));
  }
  catch(err){
    console.log(err)
  }
}
export const Signout = (history) => async (dispatch) => {
 try{
    dispatch({ type: SigninType.SIGNOUT});
      history.push("/");
      localStorage.removeItem("userToken")
 }
 catch(err){
    console.log(err)
 } 
}