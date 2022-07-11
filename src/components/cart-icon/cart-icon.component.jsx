import { ShoppingBagIcon } from '@heroicons/react/outline';
const CartIcon = () => {
  return (
    <button className='text-gray-700 hover:text-blue-700 relative'>
      <ShoppingBagIcon className='h-6 w-6' />
      <span className='absolute -top-3 -right-3 text-xs flex min-w-[24px] min-h-[24px] p-1 bg-gray-700 text-gray-100 items-center justify-center rounded-full'>
        10
      </span>
    </button>
  );
};
export default CartIcon;
