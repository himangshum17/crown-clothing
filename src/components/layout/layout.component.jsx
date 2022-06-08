import { Outlet } from 'react-router-dom';
import Footer from '../footer';
import Navigation from '../navigation';

const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
