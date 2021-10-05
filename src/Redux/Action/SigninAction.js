import axios from "axios";
import BaseURL from "../../Utils/BaseUrl";
import { SigninType } from "../Type/SigninType";

const Signin = (email, password, history) => async (dispatch) => {
  dispatch({ type: SigninType.SIGNIN_REQUEST });
  try {
    const { data } = await axios.post(`${BaseURL}/user/login`, {
      email,
      password,
    });
    dispatch({ type: SigninType.SIGNIN_SUCCESS, payload: data });
    history.push("/");
    localStorage.setItem("userToken", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: SigninType.SIGNIN_FAIL,
      payload: err.message,
    });
  }
};

export default Signin;