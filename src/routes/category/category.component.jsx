import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { ProductCard, Spinner } from '../../components';
import Button from '../../components/button';
import { useSelector } from 'react-redux';
import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from '../../store/categories/category.selector';

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState([]);
  const { category } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);
  const handleGoBackToRoute = () => {
    navigate(-1);
  };
  return (
    <>
      <h2 className='text-xl font-semibold uppercase tracking-wider'>
        {category}
      </h2>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
            {products?.map(product => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <Button
            extraClasses='mt-8'
            buttontype='inverted'
            onClick={handleGoBackToRoute}>
            Back to Categories
          </Button>
        </>
      )}
    </>
  );
};
export default Category;
