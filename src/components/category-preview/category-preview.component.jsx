import Productcard from '../productcard';

const CategoryPreview = ({ categories }) => {
  return (
    <>
      {Object.keys(categories).map(title => (
        <div key={title}>
          <h2 className='text-xl font-semibold uppercase tracking-wider'>
            {title}
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8'>
            {categories[title]
              .filter((_, i) => i < 4)
              .map(product => (
                <Productcard key={product.id} {...product} />
              ))}
          </div>
        </div>
      ))}
    </>
  );
};
export default CategoryPreview;
