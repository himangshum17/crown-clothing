import UseProductsContext from '../../hooks/useProductsContext.hook';

const Shop = () => {
  const { products } = UseProductsContext();
  return (
    <>
      {products.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
    </>
  );
};
export default Shop;
