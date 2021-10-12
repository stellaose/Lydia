import { ServiceType } from "../Type";

const initialState = {
  data: null,
  pending: false,
  error: null,
};

const ServiceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ServiceType.SET_SERVICE: {
      const { data } = action;
      return { ...initialState, data};
    }
    case ServiceType.GET_FEATURED: {
      const { data } = action;
      return { ...initialState, data };
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