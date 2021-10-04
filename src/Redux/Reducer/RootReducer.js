
import { combineReducers } from "redux";
import SigninReducer from "./SigninReducer";
import  ServicesReducer  from "./ServicesReducer";
import  ServiceReducer  from "./ServiceReducer";
import  SignupReducer  from './SignupReducer';
import FormReducer from './FormReducer'

const rootReducer = combineReducers({
  userSignup: SignupReducer,
  userSignin: SigninReducer,
  services: ServicesReducer,
  service: ServiceReducer,
  form: FormReducer
});

export default rootReducer;
