import React from 'react'
import { Home } from './Pages/Home';
import { useRoutes } from "react-router-dom";
import ProductList from './Pages/ProductList';
import AddProduct from './Pages/AddProduct';


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
        }
         
      ]);
  return (
    routes
  )
}

export default Routes