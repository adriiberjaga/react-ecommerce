import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Carrito from './pages/Carrito';

//  colocar <Routes /> en index.tsx

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'products',
        element: <ProductList />,
      },
      {
        path: 'products/:id',
        element: <ProductDetail />,
      },
      {
        path: 'carrito',
        element: <Carrito />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />; //router={router} linea 11
}
