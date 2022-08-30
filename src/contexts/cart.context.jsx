import { createContext, useReducer } from 'react';
import { createAction } from '../utils/reducer/reducer.util';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addToCartItem: () => {},
  removeFromCart: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0,
});

const CART_ACTIONS_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  TOGGLE_CART_DROPDOWN_ISOPEN: 'TOGGLE_CART_DROPDOWN_ISOPEN',
};

const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_ACTIONS_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTIONS_TYPES.TOGGLE_CART_DROPDOWN_ISOPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Invalid action type ${type} inside cartReducer`);
  }
};

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map(item =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartToRemove) => {
  const existingCartItem = cartItems.find(item => item.id === cartToRemove.id);

  if (existingCartItem.quantity === 1) {
    return cartItems.filter(item => item.id !== cartToRemove.id);
  }
  return cartItems.map(item =>
    item.id === cartToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};

const clearCartItem = (cartItems, cartToRemove) => {
  return cartItems.filter(item => item.id !== cartToRemove.id);
};

export const CartContextProvider = ({ children }) => {
  const initialCartState = {
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
    isCartOpen: false,
  };

  const [state, dispatch] = useReducer(cartReducer, initialCartState);
  const { cartItems, isCartOpen, cartTotal, cartCount } = state;

  const updateCartItemsReducer = newCartItems => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    dispatch(
      createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      })
    );
  };

  const addToCartItem = productToAdd => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const removeFromCart = cartToRemove => {
    const newCartItems = removeCartItem(cartItems, cartToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = cartToRemove => {
    const newCartItems = clearCartItem(cartItems, cartToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const setIsCartOpen = boolean => {
    dispatch(
      createAction(CART_ACTIONS_TYPES.TOGGLE_CART_DROPDOWN_ISOPEN, boolean)
    );
  };

  const contextValue = {
    isCartOpen,
    setIsCartOpen,
    addToCartItem,
    cartItems,
    cartCount,
    removeFromCart,
    clearItemFromCart,
    cartTotal,
  };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
