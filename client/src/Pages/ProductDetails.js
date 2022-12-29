import React, { useEffect } from 'react'
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { NavBar } from '../components/NavigationBar/NavBar';
import { getoneproduct } from '../JS/actions/productActions';

const ProductDetails = () => {
    const el=useSelector(state=>state.prod.productDetailes)
    const{idprod}=useParams()
    const dispatch=useDispatch()
    useEffect(() => {
    dispatch(getoneproduct(idprod))
    }, [idprod])
    
  return (
    
    <div>
        <NavBar/>
        <Card border="primary" style={{ width: "18rem", marginTop: "20px" }}>
          <Card.Header>{el.title}</Card.Header>
          <Card.Body>
            <Card.Title>{el.qtes ? el.qtes : "fin du stock"}</Card.Title>
            <Card.Img src={el.image}/>
            <Card.Text>{el.price} DT</Card.Text>
    
          </Card.Body>
        </Card>
      </div>
  )
}

export default ProductDetails