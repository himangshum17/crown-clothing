import { ArrowCircleRightIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import Productcard from '../productcard';

const CategoryPreview = ({ categories }) => {
  return (
    <>
      {Object.keys(categories).map(title => (
        <div key={title}>
          <div className='flex justify-between items-center gap-4'>
            <h2 className='text-xl font-semibold uppercase tracking-wider'>
              {title}
            </h2>
            <Link
              className='p-2 text-sm text-gray-600 font-medium capitalize flex justify-between items-center gap-2 hover:text-blue-600'
              to={`/shop/${title}`}>
              view all products
              <ArrowCircleRightIcon className='h-6 w-6' />
            </Link>
          </div>
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
