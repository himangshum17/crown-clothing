import Categoryitem from '../categoryitem';
import categories from './categories.json';
const Directory = () => {
  return (
    <div className='grid lg:grid-cols-6 gap-6'>
      {categories.map(category => (
        <Categoryitem key={category.id} {...category} />
      ))}
    </div>
  );
};
export default Directory;
