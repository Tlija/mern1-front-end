import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { deleteproduct, getoneproduct } from "../../JS/actions/productActions";
import { Link } from "react-router-dom";

const ProductCard = ({ el }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <Card border="primary" style={{ width: "18rem", marginTop: "20px" }}>
          <Card.Header>{el.title}</Card.Header>
          <Card.Body>
            <Card.Img src={el.image}/>
            <Card.Title>{el.qtes ? el.qtes : "fin du stock"}</Card.Title>
            <Card.Text>{el.price} DT</Card.Text>
            <Link to={`/details/${el._id}`}>
              <Button
                variant="primary"
                onClick={() => dispatch(getoneproduct(el._id))}
              >
                See Details
              </Button>{" "}
            </Link>
            <Link to='/edit'>
            <Button
              variant="success"
              onClick={() => dispatch(getoneproduct(el._id))}
            >
              Edit
            </Button>{" "}
            </Link>
            <Button
              variant="danger"
              onClick={() => dispatch(deleteproduct(el._id))}
            >
              Delete
            </Button>{" "}
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default ProductCard;
