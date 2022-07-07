import Button from '../button';

const ProductCard = ({ name, imageUrl, price }) => {
  return (
    <div>
      <img src={imageUrl} alt={name} />
      <div>
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <Button buttontype='inverted'>add to cart</Button>
    </div>
  );
};
export default ProductCard;
