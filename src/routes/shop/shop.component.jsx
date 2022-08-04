import { ProductCard } from '../../components';
import UseProductsContext from '../../hooks/useCategoriesContext.hook';

const Shop = () => {
  const { categoriesMap } = UseProductsContext();
  return (
    <section className='pt-10 lg:py-20'>
      <div className='container space-y-12'>
        {Object.keys(categoriesMap).map(title => (
          <div key={title}>
            <h2 className='text-xl font-semibold uppercase tracking-wider'>
              {title}
            </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
              {categoriesMap[title].slice(0, 4).map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Shop;
