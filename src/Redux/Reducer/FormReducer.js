import { FormType } from "../Type/FormType";

const initialState = {};

const FormReducer = (state = initialState, action) => {
    switch(action.type) {
        case FormType.REGISTER_REQUEST:
            return { ...state, [action.name]: action.value };
        case FormType.REGISTER_SUCCESS:
            return { ...state, [action.name]: action.defaultValue };
        case FormType.REGISTER_FAIL:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}

export default FormReducer;