import { Route, Routes } from 'react-router-dom';
import { CategoryPreview } from '../../components';
import UseProductsContext from '../../hooks/useCategoriesContext.hook';
import Category from '../category/category.component';

const Shop = () => {
  const { categoriesMap } = UseProductsContext();
  return (
    <section className='pt-10 lg:py-20'>
      <div className='container space-y-12'>
        <Routes>
          <Route
            index
            element={<CategoryPreview categories={categoriesMap} />}
          />
          <Route path=':category' element={<Category />} />
        </Routes>
      </div>
    </section>
  );
};
export default Shop;
