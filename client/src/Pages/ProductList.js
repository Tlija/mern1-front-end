import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NavBar } from "../components/NavigationBar/NavBar";
import ProductCard from "../components/Product/ProductCard";
import { getallproducts } from "../JS/actions/productActions";

const ProductList = () => {
  const dispatch = useDispatch();

  

  // the width of the box
  const [width, setWidth] = useState(0);
console.log(typeof(width))
  // This function is called when the first range slider changes
  const changeWidth = (event) => {
    setWidth(event.target.value);
  };
  useEffect(() => {
    dispatch(getallproducts(Number(width)?Number(width):0));
  }, [width]);
  const products = useSelector((state) => state.prod.products);
  const loading = useSelector((state) => state.prod.loading);
  return (
    <>
      {" "}
      <NavBar />
      <Link to="/add">Add Product</Link>
      <br />
      {/* A range slider with default appearance */}
      <h4>Filter price: {width}DT</h4>
      <input
        type="range"
        onChange={changeWidth}
        min={0}
        max={800}
        step={10}
        value={width}
      ></input>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {loading
          ? "loading..."
          : products.map((el) => <ProductCard el={el} key={el._id} />)}
      </div>
    </>
  );
};

export default ProductList;
