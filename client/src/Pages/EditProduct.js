import React, { useEffect, useState } from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { editproduct } from '../JS/actions/productActions';


const EditProduct = () => {
    const data = [
        {
          value: "vetement",
          label: "vetement",
        },
        {
          value: "jewelry",
          label: "jewelry",
        },
        {
          value: "electronics",
          label: "electronics",
        },
        {
          value: "meuble",
          label: "meuble",
        },
        {
          value: "phones",
          label: "phones",
        },
        {
          value: "info",
          label: "info",
        },
      ];
    const proddetails=useSelector(state=>state.prod.productDetailes)
    console.log(proddetails)
      // set value for default selection
      const [selectedValue, setSelectedValue] = useState([]);
    
      // handle onChange event of the dropdown
      const handleChange = (e) => {
        setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
      };
    
      //   use state for products
      const [product, setProduct] = useState({
        title: "",
        description:"" ,
        price: 0,
        qtes: 0,
      });
      useEffect(() => {
        if (!loading) {
            setSelectedValue(proddetails.category)
        setProduct({
            title: proddetails.title,
            description:proddetails.description ,
            price: proddetails.price,
            qtes: proddetails.qtes,
          })
        }
      }, [proddetails])
      
      const handleChangeProd = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
      };
      const dispatch=useDispatch()
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        const newProd={...product,category:selectedValue,instoke:product.qtes?true:false}  
        dispatch(editproduct(proddetails._id,newProd,navigate))
        // console.log(newProd)
     
    }
    const loading=useSelector(state=>state.prod.loading)
    if (loading) {
        return '...loading'
    }
  return (
<div
      className="container"
      style={{ marginTop: "20px", marginBottom: "20px" }}
    >
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            onChange={handleChangeProd}
            value={product.title}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            onChange={handleChangeProd}
            value={product.description}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Quantity in stock</Form.Label>
          <Form.Control
            type="number"
            name="qtes"
            onChange={handleChangeProd}
            value={product.qtes}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            name="price"
            onChange={handleChangeProd}
            value={product.price}
          />
        </Form.Group>
        <Select
          className="dropdown"
          placeholder="Select Option"
          value={data.filter((obj) => selectedValue.includes(obj.value))} // set selected values
          options={data} // set list of the data
          onChange={handleChange} // assign onChange function
          isMulti
          isClearable
        />

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Link to="/products">
          <Button variant="danger" type="reset">
            Cancel
          </Button>
        </Link>
      </Form>
    </div>  )
}

export default EditProduct