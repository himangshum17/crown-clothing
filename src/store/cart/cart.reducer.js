import { CART_ACTIONS_TYPES } from './cart.actiontypes';

const CART_INITIAL_VALUE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = (state = CART_INITIAL_VALUE, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTIONS_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTIONS_TYPES.TOGGLE_CART_DROPDOWN_ISOPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      return state;
  }
};
