import { Link } from 'react-router-dom';
import {
  ArrowLeftIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  XCircleIcon,
} from '@heroicons/react/outline';
import UseCartContext from '../../hooks/useCartContext.hook';

const Checkout = () => {
  const {
    cartItems,
    addToCartItem,
    removeFromCart,
    clearItemFromCart,
    cartCount,
    cartTotal,
  } = UseCartContext();
  return (
    <section className='pt-10 lg:py-20'>
      <div className='container'>
        {cartCount ? (
          <>
            <table className='w-full'>
              <thead>
                <tr>
                  <th className='text-left px-4 py-2'>Product</th>
                  <th className='text-left px-4 py-2'>Description</th>
                  <th className='text-left px-4 py-2'>Quantity</th>
                  <th className='text-left px-4 py-2'>Price</th>
                  <th className='text-right px-4 py-2'>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(cartItem => (
                  <tr key={cartItem.id}>
                    <td className='text-left px-4 py-2'>
                      <img
                        className='w-16 h-20 object-cover'
                        src={cartItem.imageUrl}
                        alt={cartItem.name}
                      />
                    </td>
                    <td className='text-left px-4 py-2'>{cartItem.name}</td>
                    <td className='text-left px-4 py-2'>
                      <div className='flex gap-4 items-center'>
                        <button onClick={() => removeFromCart(cartItem)}>
                          <MinusCircleIcon className='h-6 w-6' />
                        </button>
                        <span className='tabular-nums'>
                          {cartItem.quantity}
                        </span>
                        <button onClick={() => addToCartItem(cartItem)}>
                          <PlusCircleIcon className='h-6 w-6' />
                        </button>
                      </div>
                    </td>
                    <td className='text-left px-4 py-2'>$ {cartItem.price}</td>
                    <td className='text-right px-4 py-2'>
                      <button
                        className='text-gray-500 hover:text-red-500'
                        onClick={() => clearItemFromCart(cartItem)}>
                        <XCircleIcon className='h-6 w-6' />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='p-4 border-t border-gray-200'>
              <h2 className='text-right text-2xl font-semibold tabular-nums'>
                Cart Total : $ {cartTotal}
              </h2>
            </div>
          </>
        ) : (
          <div>
            <p>
              Your cart is empty, Please vist our shop page for exploring our
              products.
            </p>
            <Link
              to='/shop'
              className='inline-flex items-center gap-2 mt-4 bg-gray-800 text-gray-200 px-4 py-3 text-sm uppercase tracking-wider hover:bg-gray-700 transition-all border border-transparent text-center'>
              <ArrowLeftIcon className='h-4 w-4' />
              <span>Back to shopping</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
export default Checkout;
