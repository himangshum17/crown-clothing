import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { CartContextProvider } from './contexts/cart.context';
import { CategoriesContextProvider } from './contexts/categories.context';
import { UserContextProvider } from './contexts/user.context';
import './index.css';
import { store } from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <UserContextProvider>
          <CategoriesContextProvider>
            <CartContextProvider>
              <App />
            </CartContextProvider>
          </CategoriesContextProvider>
        </UserContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
