import { Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import Contact from './routes/contact/contact.component';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import Signin from './routes/sign-in/sign-in.component';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/sign-in' element={<Signin />} />
      </Route>
    </Routes>
  );
};

export default App;
