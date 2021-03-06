import {SigninType} from "../Type/SigninType";

const savedUser = JSON.parse(localStorage.getItem("userToken") || "{}");

const initialState = {
  isAuthenticated: !!savedUser?._id,
  user: {},
  isLoading: false,
  error: {},
  ...savedUser,
};

const SigninReducer = (state = initialState, action) => {
  switch (action.type) {
    case SigninType.SIGNIN_REQUEST:
      return {  
                ...state, 
                isLoading: true 
          };
        
    case SigninType.SIGNIN_SUCCESS:
      return {
          ...state,
          isLoading: false,
          isAuthenticated: true,
          user: action.payload,
      };
    
    case SigninType.GOOGLE_SIGNIN: 
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
      };
    
    case SigninType.SIGNIN_FAIL:
      return { 
              ...state, 
              isLoading: false, 
              error: action.payload 
          };
    case SigninType.FORGET_PASSWORD: 
          return {

          };
    
    case SigninType.RESET_PASSWORD: 
         return {

          };

    case SigninType.SIGNOUT:
      return {
              isAuthenticated: false,
              isLoading: false
          };
        
    default:
      return state;
  }
};

export default SigninReducer;