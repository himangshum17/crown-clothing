import { createContext, useState } from 'react';
import ShopData from '../shop-data.json';
// default value
export const ProductsContext = createContext({
  products: [],
});
export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState(ShopData);
  const contextValue = {
    products,
  };
  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};
