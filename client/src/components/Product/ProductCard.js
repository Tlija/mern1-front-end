import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { deleteproduct } from '../../JS/actions/productActions';



const ProductCard = ({el}) => {
  const dispatch=useDispatch()
  return (
    <>
    
<div>
 
<Card border="primary" style={{ width: '18rem',marginTop:'20px' }}>
        <Card.Header>{el.title}</Card.Header>
        <Card.Body>
          <Card.Title>{el.qtes?el.qtes:'fin du stock'}</Card.Title>
          <Card.Text>
           {el.price} DT
          </Card.Text>
          <Button variant="primary">See Details</Button>{' '}
          <Button variant="success">Edit</Button>{' '}
          <Button variant="danger" onClick={()=>dispatch(deleteproduct(el._id))}>Delete</Button>{' '}

        </Card.Body>
      </Card>
  
</div>
</>
  )
}

export default ProductCard