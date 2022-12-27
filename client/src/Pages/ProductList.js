import React, { useEffect } from 'react';
import {useDispatch, useSelector}from 'react-redux';
import ProductCard from '../components/Product/ProductCard';
import { getallproducts } from '../JS/actions/productActions';

const ProductList = () => {
    const dispatch=useDispatch()
    
    useEffect(() => {
      dispatch(getallproducts())
    
      
    }, [])
    const products=useSelector((state)=>state.prod.products
    )
    const loading=useSelector((state)=>state.prod.loading)
    
  return (
    <div style={{display:'flex' ,justifyContent:'space-around'}}>
        {loading?'loading...':products.map((el)=><ProductCard el={el} key={el._id} />)}
    </div>
  )
}

export default ProductList