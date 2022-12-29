import React from 'react'
import { Home } from './Pages/Home';
import { useRoutes } from "react-router-dom";
import ProductList from './Pages/ProductList';
import AddProduct from './Pages/AddProduct';
import ProductDetails from './Pages/ProductDetails';
import EditProduct from './Pages/EditProduct';


const Routes = () => {
    let routes = useRoutes([
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/products",
          element: <ProductList/>
        },
        {
          path: "/add",
          element: <AddProduct/>
        },
        {
          path: "/details/:idprod",
          element: <ProductDetails/>
        },
        {
          path: "/edit",
          element: <EditProduct/>
        }
         
      ]);
  return (
    routes
  )
}

export default Routes