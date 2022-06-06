import { Route, Routes } from 'react-router-dom';
import { Navigation } from './components';
import Contact from './routes/contact/contact.component';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
