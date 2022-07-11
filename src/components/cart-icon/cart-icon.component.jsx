import { ShoppingBagIcon } from '@heroicons/react/outline';
import UseCartContext from '../../hooks/useCartContext.hook';
const CartIcon = () => {
  const { setIsCartOpen } = UseCartContext();
  const handleCartToggle = () => setIsCartOpen(prevState => !prevState);
  return (
    <button
      className='text-gray-700 hover:text-blue-700 relative'
      onClick={handleCartToggle}>
      <ShoppingBagIcon className='h-6 w-6' />
      <span className='absolute -top-3 -right-3 text-xs flex min-w-[24px] min-h-[24px] p-1 bg-gray-700 text-gray-100 items-center justify-center rounded-full'>
        10
      </span>
    </button>
  );
};
export default CartIcon;
