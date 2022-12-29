import axios from "axios";
import {
  PRODUCTFAILED,
  GETALLPRODUCTSSUCCESS,
  LOADING,
  ADDPRODUCTSUCCESS,
  DELETEPRODUCTSUCCESS,
  GETONEPRODUCTSUCCESS,
  EDITPRODUCTSUCCESS,
} from "../actionTypes/productConst";
/**
 * @method GET /product/
 * @description get all products
 * @acces public
 */
export const getallproducts = (price) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });
  console.log(price);
  try {
    const res = await axios.get(price ? `/product?price=${price}` : "/product");
    dispatch({ type: GETALLPRODUCTSSUCCESS, payload: res.data.products });
  } catch (error) {
    dispatch({
      type: PRODUCTFAILED,
      payload: error,
    });
  }
};
/**
 * @method POST /product/add
 * @description add new product
 * @acces public
 */
export const addproduct = (newProduct, navigate) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const res = await axios.post("/product/add", newProduct);
    console.log("res", res.data);
    alert(`${res.data.msg}`);
    dispatch({ type: ADDPRODUCTSUCCESS });
    dispatch(getallproducts(0));
    navigate("/products");
  } catch (error) {
    console.log(error)
    dispatch({
      type: PRODUCTFAILED,
      payload: error,
    });
  }
};
/**
 * @method DELETE /product/:id
 * @description delete one product
 * @acces public
 */
export const deleteproduct = (id) => async (dispatch) => {
  dispatch({
    type: LOADING,
  });

  try {
    const res = await axios.delete(`/product/${id}`);
    console.log("res", res.data);
    alert(`${res.data.msg}`);
    dispatch({ type: DELETEPRODUCTSUCCESS });
    dispatch(getallproducts(0));
  } catch (error) {
    dispatch({
      type: PRODUCTFAILED,
      payload: error,
    });
  }
};
/**
 * @method GET /product/:id
 * @description get one product
 * @acces public
 */

export const getoneproduct=(id)=>async(dispatch)=>{
    dispatch({
        type:LOADING
    })
    
    try {
        const res=await axios.get(`/product/${id}`)
        console.log('res', res.data)
        // alert(`${res.data.msg}`)
        dispatch ({type:GETONEPRODUCTSUCCESS, payload:res.data.product})
       
    } catch (error) {
        dispatch({
            type:PRODUCTFAILED,payload:error
        })

    }

}
/**
 * @method PUT /product/:id
 * @description update one product
 * @acces public
 */
export const editproduct=(id,editedProduct,navigate)=>async(dispatch)=>{
    dispatch({
        type:LOADING
    })
    
    try {
        const res=await axios.put(`/product/${id}`,editedProduct)
        console.log('res', res.data)
        alert(`${res.data.msg}`)
        dispatch ({type:EDITPRODUCTSUCCESS})
        dispatch(getallproducts(0));
        navigate('/products')

       
    } catch (error) {
        dispatch({
            type:PRODUCTFAILED,payload:error
        })

    }

}