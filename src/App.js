import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ShopListBody from './pages/Second/ShopListBody';
import './App.css';
import First from './pages/First/First';
import Checkout from './pages/Third/Checkout';

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
