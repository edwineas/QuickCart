import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ShopListBody from './pages/Second/ShopListBody';
import './App.css';
import First from './pages/First/First';
import Checkout from './pages/Third/Checkout';
import Cart from './components/Cart/Cart';
import Login from './pages/Login/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <First />,
  },
  {
    path: '/shop-list',
    element: <ShopListBody />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/cart',
    element: <Cart/>,
  },
  {
    path: '/login',
    element: <Login/>,
  }
]);

function App() {


  return (
    <>
        <RouterProvider router={router} />
    </>    
  );
}

export default App;
