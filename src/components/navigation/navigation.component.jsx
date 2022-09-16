import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuAlt3Icon, XIcon } from '@heroicons/react/outline';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectCartisOpen } from '../../store/cart/cart.selector';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectCartisOpen);

  const handleMenuToggle = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <header className='pt-6'>
      <div className='container'>
        <div className='flex items-center relative border-b border-gray-200 pb-6'>
          <Link to='/'>
            <img src='/assets/images/logo/crown.svg' alt='' />
          </Link>
          <button className='lg:hidden ml-auto' onClick={handleMenuToggle}>
            {isMenuOpen ? (
              <XIcon className='h-6 w-6' />
            ) : (
              <MenuAlt3Icon className='h-6 w-6' />
            )}
          </button>
          <nav
            className={`absolute top-full left-0 right-0 p-4 lg:relative lg:p-0 lg:top-0 lg:left-auto lg:right-auto ml-auto lg:shadow-none bg-white shadow-lg lg:block z-10 ${
              isMenuOpen ? 'block' : 'hidden'
            }`}>
            <ul className='lg:flex items-center space-y-2 lg:space-y-0 lg:space-x-6'>
              <li>
                <Link
                  className='text-sm uppercase tracking-wide font-medium text-gray-700 hover:text-blue-700'
                  to='/shop'>
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  className='text-sm uppercase tracking-wide font-medium text-gray-700 hover:text-blue-700'
                  to='/contact'>
                  Contact
                </Link>
              </li>
              <li>
                {currentUser ? (
                  <button
                    onClick={signOutUser}
                    className='text-sm uppercase tracking-wide font-medium text-gray-700 hover:text-blue-700'>
                    sign out
                  </button>
                ) : (
                  <Link
                    className='text-sm uppercase tracking-wide font-medium text-gray-700 hover:text-blue-700'
                    to='/auth'>
                    Sign in
                  </Link>
                )}
              </li>
            </ul>
          </nav>
          <div className='ml-2 lg:ml-6'>
            <CartIcon />
          </div>
          {isCartOpen && <CartDropdown />}
        </div>
      </div>
    </header>
  );
};
export default Navigation;
