import React from 'react';
// import './Card.css';

const ProductCard = ({el}) => {
  return (
<div>
  <div className="container">
    <div className="content">
      <h1>{el.title}</h1>
      <h3>{el.price}</h3>
      <h2>{el.qtes}</h2>
    </div>
    <div>
        <button>see Details</button>
        <button>Edit</button>
        <button>Delete</button>
    </div>
    <div className="flap" />
  </div>
  
</div>
  )
}

export default ProductCard