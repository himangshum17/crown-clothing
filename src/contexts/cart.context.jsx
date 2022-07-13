import { createContext, useState } from 'react';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  addToCartItem: () => {},
});

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  console.log('cartItems', cartItems);
  const addToCartItem = productToAdd => {
    setcartItems([...cartItems, productToAdd]);
  };
  const contextValue = { isCartOpen, setIsCartOpen, addToCartItem, cartItems };
  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
