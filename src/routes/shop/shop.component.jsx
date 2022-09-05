import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { CategoryPreview } from '../../components';
import { setCategoriesMap } from '../../store/categories/category.action';
import { selectCategories } from '../../store/categories/category.selector';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import Category from '../category/category.component';

const Shop = () => {
  const dispatch = useDispatch();
  const categoriesMap = useSelector(selectCategories);
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');
      dispatch(setCategoriesMap(categoryMap));
    };
    getCategoriesMap();
  }, [dispatch]);
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
