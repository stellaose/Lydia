import { CheckoutTypes } from "../type/CheckoutType";

const initialState = {
  services: [],
  pending: false
};

export const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case CheckoutTypes.ADD_TO_CHECKOUT: {
      const { data } = action;
      return { ...initialState, data };
    }
    case CheckoutTypes.SET_PENDING: {
      const { pending } = action;
      return { ...initialState, pending };
    }
    default:
      return state;
  }
}
