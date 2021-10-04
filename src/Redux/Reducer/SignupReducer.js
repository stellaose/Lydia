import { SignupType } from "../Type/SignupType";

const initialState = {
    isAuthenticated: false,
    user: {},
    isLoading: false,
    error: {}
};

const SignupReducer = (state = initialState, action) => {
    switch(action.type) {
        case SignupType.REGISTER_REQUEST:
            return { ...state, isLoading: true };
        case SignupType.REGISTER_SUCCESS:
            return { ...state, isLoading: false, isAuthenticated: true, user: action.payload };
        case SignupType.REGISTER_FAIL:
            return { ...state, isLoading: false, error: action.payload };
        case SignupType.AUTH_ERROR: 
            return { };
        default:
            return state;
    }
}

export default SignupReducer;