import UseCartContext from '../../hooks/useCartContext.hook';
import Button from '../button';
import CartItem from '../cart-item';

const CartDropdown = () => {
  const { cartItems } = UseCartContext();
  return (
    <div className='absolute right-0 top-full flex flex-col max-w-xs w-56 border border-gray-900 h-72 z-10 bg-white p-4'>
      {cartItems.length > 0 ? (
        <>
          <div className='flex-1 py-2 overflow-auto space-y-4'>
            {cartItems?.map(cartItem => (
              <CartItem key={cartItem.id} {...cartItem} />
            ))}
          </div>
          <Button extraClasses='w-full mt-auto'>Checkout</Button>
        </>
      ) : (
        <span className='block text-center'>Your cart is empty</span>
      )}
    </div>
  );
};
export default CartDropdown;
