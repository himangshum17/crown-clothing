import { createContext, useEffect, useState } from 'react';

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
  ADD_ITEM_TO_CART: 'ADD_ITEM_TO_CART',
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS_TYPES.ADD_ITEM_TO_CART:
      return {
        ...state,
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
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addToCartItem = productToAdd => {
    setcartItems(addCartItem(cartItems, productToAdd));
  };

  const removeFromCart = cartToRemove => {
    setcartItems(removeCartItem(cartItems, cartToRemove));
  };

  const clearItemFromCart = cartToRemove => {
    setcartItems(clearCartItem(cartItems, cartToRemove));
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
