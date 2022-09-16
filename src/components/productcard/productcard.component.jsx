import { useDispatch, useSelector } from 'react-redux';
import { addToCartItem } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../button';

const ProductCard = ({ name, imageUrl, price, id }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const handleAddtoCartItem = () =>
    dispatch(addToCartItem(cartItems, { name, imageUrl, price, id }));
  return (
    <div>
      <div className='relative'>
        <img className='h-80 w-full object-cover' src={imageUrl} alt={name} />
        <div className='absolute bottom-4 left-4 right-4 text-center'>
          <Button
            type='button'
            buttontype='inverted'
            onClick={handleAddtoCartItem}>
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
