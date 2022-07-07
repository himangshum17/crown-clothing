import { ProductCard } from '../../components';
import UseProductsContext from '../../hooks/useProductsContext.hook';

const Shop = () => {
  const { products } = UseProductsContext();
  return (
    <>
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </>
  );
};
export default Shop;
