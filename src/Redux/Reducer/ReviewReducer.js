import { ReviewType } from '../Type';

const initialState = {
    data: {},
    review: [],
    error: null
};

const ReviewReducer = (state = initialState, action) => {
    switch(action.type){
        case ReviewType.SET_REVIEW: {
            const { data } = action;
            return {
                ...state, review: [ ...state.getOneReview, data]
            }
        }
        case ReviewType.SET_ERROR: {
            const { error } = action;
            return { 
                ...state, 
                 error 
                };
        }
        default:
            return state;
    }
}

export default ReviewReducer