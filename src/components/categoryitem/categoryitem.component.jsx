const CategoryItem = ({ title, big, imageUrl }) => {
  return (
    <div
      className={`relative ${big ? 'lg:col-span-3' : 'lg:col-span-2'} group`}>
      <img className='lg:h-96 w-full object-cover' src={imageUrl} alt={title} />
      <div className='absolute py-8 px-4 left-0 right-0 bottom-0 bg-gray-900/60 group-hover:bg-gray-900/80'>
        <h2 className='text-2xl text-gray-100 font-bold uppercase tracking-wide'>
          {title}
        </h2>
        <p className='uppercase text-xs tracking-wider text-gray-300'>
          shop now
        </p>
      </div>
    </div>
  );
};
export default CategoryItem;
