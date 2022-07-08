import Button from '../button';

const ProductCard = ({ name, imageUrl, price }) => {
  return (
    <div>
      <div className='relative'>
        <img className='h-80 w-full object-cover' src={imageUrl} alt={name} />
        <div className='absolute bottom-4 left-4 right-4 text-center'>
          <Button buttontype='inverted'>add to cart</Button>
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
