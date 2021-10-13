import { ServicesTypes } from "../Type";

const initialState = {
  data: [],
  pending: false,
  error: null,
};

const ServicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ServicesTypes.SET_SERVICES: {
      const { data } = action;
      return { ...initialState, data };
    }
    case ServicesTypes.SET_PENDING: {
      const { pending } = action;
      return { ...initialState, pending };
    }
    case ServicesTypes.SET_ERROR: {
      const { error } = action;
      return { ...state, pending: false, error };
    }
    default:
      return state;
  }
};

export default ServicesReducer;