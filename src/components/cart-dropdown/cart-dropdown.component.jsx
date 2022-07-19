import UseCartContext from '../../hooks/useCartContext.hook';
import { Link } from 'react-router-dom';
import CartItem from '../cart-item';

const CartDropdown = () => {
  const { cartItems, cartCount } = UseCartContext();
  return (
    <div className='absolute right-0 top-full flex flex-col max-w-xs w-56 border border-gray-900 h-72 z-10 bg-white p-4'>
      {cartCount ? (
        <>
          <div className='flex-1 py-2 overflow-auto space-y-4'>
            {cartItems?.map(cartItem => (
              <CartItem key={cartItem.id} {...cartItem} />
            ))}
          </div>
          <Link
            to='/checkout'
            className='bg-gray-800 place-self-start mt-4 text-gray-200 px-4 py-3 text-sm uppercase tracking-wider hover:bg-gray-700 transition-all border border-transparent w-full text-center'>
            Checkout
          </Link>
        </>
      ) : (
        <span className='block text-center'>Your cart is empty</span>
      )}
    </div>
  );
};
export default CartDropdown;
