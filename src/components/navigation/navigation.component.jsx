import { Link, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <header className='py-6'>
        <div className='container'>
          <div className='flex justify-between'>
            <Link to='/'>
              <img src='/assets/images/logo/crown.svg' alt='' />
            </Link>
            <nav>
              <ul className='flex items-center space-x-6'>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/shop'>Shop</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};
export default Navigation;
