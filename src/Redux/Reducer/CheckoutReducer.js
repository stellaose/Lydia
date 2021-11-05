import { CheckoutType } from "../Type/CheckoutType";

const initialState = {
  services: [],
  pending: false
};

const CheckoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case CheckoutType.ADD_TO_CHECKOUT: {
      const { data } = action;
      return { ...initialState, data };
    }
    case CheckoutType.SET_PENDING: {
      const { pending } = action;
      return { ...initialState, pending };
    }
    default:
      return state;
  }
}

export default CheckoutReducer
