import UseCartContext from '../../hooks/useCartContext.hook';
import Button from '../button';

const ProductCard = ({ name, imageUrl, price, id }) => {
  const { addToCartItem } = UseCartContext();
  return (
    <div>
      <div className='relative'>
        <img className='h-80 w-full object-cover' src={imageUrl} alt={name} />
        <div className='absolute bottom-4 left-4 right-4 text-center'>
          <Button
            type='button'
            buttontype='inverted'
            onClick={() => addToCartItem({ name, imageUrl, price, id })}>
            add to cart
          </Button>
        </div>
      </div>
      <div className='flex justify-between gap-2 mt-2'>
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </div>
  );
};
export default ProductCard;
