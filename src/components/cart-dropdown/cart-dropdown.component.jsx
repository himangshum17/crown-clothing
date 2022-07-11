import UseCartContext from '../../hooks/useCartContext.hook';
import Button from '../button';

const CartDropdown = () => {
  const { isCartOpen } = UseCartContext();
  return (
    <div
      className={`${
        isCartOpen ? 'block' : 'hidden'
      } absolute right-0 top-full flex flex-col max-w-xs w-56 border border-gray-900 h-72 z-10 bg-white p-4`}>
      CartDropdown
      <Button extraClasses='w-full mt-auto'>Checkout</Button>
    </div>
  );
};
export default CartDropdown;
