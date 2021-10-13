import {SigninType} from "../Type/SigninType";

const savedUser = JSON.parse(localStorage.getItem("userToken") || "{}");

const initialState = {
  token: localStorage.getItem('userToken'),
  isAuthenticated: localStorage.getItem('userToken') ? true : false,
  user: {},
  isLoading: false,
  error: {},
  ...savedUser,
};

const SigninReducer = (state = initialState, action) => {
  switch (action.type) {
    case SigninType.SIGNIN_REQUEST:
      return { ...state, isLoading: true };

    case SigninType.SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case SigninType.SIGNIN_FAIL:
      return { ...state, isLoading: false, error: action.payload };

    case SigninType.SIGNOUT:
      return {
        isAuthenticated: false,

      };

    default:
      return state;
  }
};

export default SigninReducer;