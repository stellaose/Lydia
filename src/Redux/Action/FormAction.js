import axios from "axios";
import BaseURL from "../../Utils/BaseUrl";

import {FormType } from "../Type/FormType";

const Register = (name, preference, knowledge, room, date, price, history) => async (dispatch) => {
    dispatch({type: FormType.REGISTER_REQUEST});
    try {
        const {data} = await axios.post(`${BaseURL}/form/create`, {
            name, preference, knowledge, room, date, price
            });
            console.log(data)
          dispatch({type: FormType.REGISTER_SUCCESS, payload: data})
          history.push("/service");
          localStorage.setItem('userToken', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: FormType.REGISTER_FAIL,
            payload: error.message
        });
        console.log(error.response)
    }
    
  };

export default Register;