import React from 'react'
import { Home } from './Pages/Home';
import { useRoutes } from "react-router-dom";
import ProductList from './Pages/ProductList';


const Routes = () => {
    let routes = useRoutes([
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/products",
          element: <ProductList/>
        }
         
      ]);
  return (
    routes
  )
}

export default Routes