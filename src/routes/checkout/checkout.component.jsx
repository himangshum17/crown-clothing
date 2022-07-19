import {
  MinusCircleIcon,
  PlusCircleIcon,
  XCircleIcon,
} from '@heroicons/react/outline';
import UseCartContext from '../../hooks/useCartContext.hook';

const Checkout = () => {
  const { cartItems, addToCartItem } = UseCartContext();
  //   console.log('cartItems', cartItems);
  return (
    <section className='pt-10 lg:py-20'>
      <div className='container'>
        <table className='w-full'>
          <thead>
            <tr>
              <th className='text-left px-4 py-2'>Product</th>
              <th className='text-left px-4 py-2'>Description</th>
              <th className='text-left px-4 py-2'>Quantity</th>
              <th className='text-left px-4 py-2'>Price</th>
              <th className='text-left px-4 py-2'>Remove</th>
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
                    <button>
                      <MinusCircleIcon className='h-6 w-6' />
                    </button>
                    <span>{cartItem.quantity}</span>
                    <button onClick={() => addToCartItem(cartItem)}>
                      <PlusCircleIcon className='h-6 w-6' />
                    </button>
                  </div>
                </td>
                <td className='text-left px-4 py-2'>{cartItem.price}</td>
                <td className='text-left px-4 py-2'>
                  <button className='text-gray-500 hover:text-red-500'>
                    <XCircleIcon className='h-6 w-6' />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
export default Checkout;
