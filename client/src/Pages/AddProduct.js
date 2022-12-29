import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import Select from "react-select";
import { useDispatch } from "react-redux";
import { addproduct } from "../JS/actions/productActions";

const AddProduct = () => {
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
  //set image
  const [image, setImage] = useState('')


  // set value for default selection
  const [selectedValue, setSelectedValue] = useState([]);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
  };

  //   use state for products
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    qtes: 0,
  });
  const handleChangeProd = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };
  const dispatch=useDispatch()
const navigate=useNavigate()
const handleSubmit=(e)=>{
    e.preventDefault()
    // const newProd={...product,category:selectedValue,instoke:product.qtes?true:false,image:image}  
   const data= new FormData()
   data.append('file',image)
   data.append('title',product.title)
   data.append('description',product.description)
   data.append('price',product.price)
   data.append('qtes',product.qtes)
   data.append('category',selectedValue)
   data.append('instoke',product.qtes?true:false)



     dispatch(addproduct(data,navigate))
    console.log(data)
    setSelectedValue([])
    setProduct({
    title: "",
    description: "",
    price: 0,
    qtes: 0,
    })
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
        <Form.Group className="mb-3">
          <Form.Label>image</Form.Label>
          <Form.Control
            type="file"
            name="file"
            onChange={(e)=>setImage(e.target.files[0])}
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
    </div>
  );
};

export default AddProduct;
