import { ProductCard } from '../../components';
import UseProductsContext from '../../hooks/useProductsContext.hook';

const Shop = () => {
  const { products } = UseProductsContext();
  return (
    <section className='pt-10 lg:py-20'>
      <div className='container'>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Shop;
