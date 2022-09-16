import { ShoppingBagIcon } from '@heroicons/react/outline';
import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../store/cart/cart.action';
import {
  selectCartCount,
  selectCartisOpen,
} from '../../store/cart/cart.selector';
const CartIcon = () => {
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectCartisOpen);
  const dispatch = useDispatch();
  const handleCartIsOpen = () => dispatch(setIsCartOpen(!isCartOpen));
  return (
    <button
      className='text-gray-700 hover:text-blue-700 relative'
      onClick={handleCartIsOpen}>
      <ShoppingBagIcon className='h-6 w-6' />
      <span className='absolute -top-3 -right-3 text-xs flex min-w-[24px] min-h-[24px] p-1 bg-gray-700 text-gray-100 items-center justify-center rounded-full'>
        {cartCount}
      </span>
    </button>
  );
};
export default CartIcon;
