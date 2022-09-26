import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { CategoryPreview } from '../../components';
import { fetchCategoriesAsync } from '../../store/categories/category.action';
import { selectCategoriesMap } from '../../store/categories/category.selector';
import Category from '../category/category.component';

const Shop = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategoriesMap);
  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);
  return (
    <section className='pt-10 lg:py-20'>
      <div className='container space-y-12'>
        <Routes>
          <Route index element={<CategoryPreview categories={categories} />} />
          <Route path=':category' element={<Category />} />
        </Routes>
      </div>
    </section>
  );
};
export default Shop;
