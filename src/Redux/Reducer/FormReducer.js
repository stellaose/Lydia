import { FormType } from "../Type/FormType";

const initialState = {
    form: {},
    isLoading: false,
    error: {}
};

const FormReducer = (state = initialState, action) => {
    switch(action.type) {
        case FormType.REGISTER_REQUEST:
            return { ...state, isLoading: true  };
        case FormType.REGISTER_SUCCESS:
            return { ...state,  
                isLoading: false, 
                form: action.payload };
        case FormType.REGISTER_FAIL:
            return { ...state, 
                isLoading: false, 
                error: action.payload };
        default:
            return state;
    }
}

export default FormReducer;