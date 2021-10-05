import axios from 'axios';
import BaseURL from "../../Utils/BaseUrl";
import { SignupType } from "../Type/SignupType";


const Register = (firstname, lastname, email, password, confirmPassword, history) => async (dispatch) => {
    dispatch({type: SignupType.REGISTER_REQUEST});
    try {
        const {data} = await axios.post(`${BaseURL}/user/register`, {
            firstname, 
            lastname, 
            email, 
            password, 
            confirmPassword,
            });
          dispatch({type: SignupType.REGISTER_SUCCESS, payload: data});
          history.push("/signin");
          localStorage.setItem('userToken', JSON.stringify(data));
    } 
    catch (error) {
        dispatch({
            type: SignupType.REGISTER_FAIL,
            payload: error.message
        });
    }
  };

  export default Register;