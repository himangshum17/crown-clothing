import { CategoryPreview } from '../../components';
import UseProductsContext from '../../hooks/useCategoriesContext.hook';

const Shop = () => {
  const { categoriesMap } = UseProductsContext();
  return (
    <section className='pt-10 lg:py-20'>
      <div className='container space-y-12'>
        <CategoryPreview categories={categoriesMap} />
      </div>
    </section>
  );
};
export default Shop;
