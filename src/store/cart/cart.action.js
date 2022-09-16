import { createAction } from '../../utils/reducer/reducer.util';
import { CART_ACTIONS_TYPES } from './cart.actiontypes';

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

// const updateCartItemsReducer = newCartItems => {
//   const newCartCount = newCartItems.reduce(
//     (total, cartItem) => total + cartItem.quantity,
//     0
//   );
//   const newCartTotal = newCartItems.reduce(
//     (total, cartItem) => total + cartItem.quantity * cartItem.price,
//     0
//   );
//   createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, {
//     cartItems: newCartItems,
//     cartCount: newCartCount,
//     cartTotal: newCartTotal,
//   });
// };

export const addToCartItem = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  // updateCartItemsReducer(newCartItems);
  return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeFromCart = (cartItems, cartToRemove) => {
  const newCartItems = removeCartItem(cartItems, cartToRemove);
  // updateCartItemsReducer(newCartItems);
  return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart = (cartItems, cartToRemove) => {
  const newCartItems = clearCartItem(cartItems, cartToRemove);
  // updateCartItemsReducer(newCartItems);
  return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems);
};

export const setIsCartOpen = boolean =>
  createAction(CART_ACTIONS_TYPES.TOGGLE_CART_DROPDOWN_ISOPEN, boolean);
