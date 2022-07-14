const CartItem = ({ imageUrl, name, price, quantity }) => {
  return (
    <div className='flex gap-2'>
      <img src={imageUrl} alt={name} className='h-14 w-14 object-cover' />
      <div>
        <h3>{name}</h3>
        <span>
          {quantity} x {price}
        </span>
      </div>
    </div>
  );
};
export default CartItem;
