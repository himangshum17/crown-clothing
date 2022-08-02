import { useContext } from 'react';
import { CategoriesContext } from '../contexts/categories.context';

const UseProductsContext = () => useContext(CategoriesContext);
export default UseProductsContext;
