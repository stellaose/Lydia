import { ServiceType, ReviewsType } from "../Type";

const initialState = {
  data: {},
  reviews: [],
  pending: false,
  error: null,
};

const ServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ServiceType.SET_SERVICE: {
      const { data } = action;
      return { ...initialState, data};
    }
    case ReviewsType.SET_REVIEW: {
      const { data } = action;
      return { ...state, reviews: [...state.reviews, data] };
    }
    case ServiceType.SET_PENDING: {
      const { pending } = action;
      return { ...initialState, pending };
    }
    case ServiceType.SET_ERROR: {
      const { error } = action;
      return { ...state, pending: false, error };
    }
    default:
      return state;
  }
};

export default ServiceReducer;