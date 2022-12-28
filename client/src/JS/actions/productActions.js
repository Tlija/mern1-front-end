import axios from 'axios';
import { PRODUCTFAILED, GETALLPRODUCTSSUCCESS, LOADING, ADDPRODUCTSUCCESS, DELETEPRODUCTSUCCESS } from "../actionTypes/productConst"
/**
 * @method GET /product/
 * @description get all products
 * @acces public
 */
export const getallproducts=(price)=>async(dispatch)=>{
    dispatch({
        type:LOADING
    })
    console.log(price)
    try {
        const res=await axios.get(price ? `/product?price=${price}`:'/product' )
        dispatch ({type:GETALLPRODUCTSSUCCESS,payload:res.data.products})
    } catch (error) {
        dispatch({
            type:PRODUCTFAILED,payload:error
        })

    }

}
/**
 * @method POST /product/add
 * @description add new product
 * @acces public
 */
export const addproduct=(newProduct,navigate)=>async(dispatch)=>{
    dispatch({
        type:LOADING
    })
    
    try {
        const res=await axios.post('/product/add',newProduct)
        console.log('res', res.data)
        alert(`${res.data.msg}`)
        dispatch ({type:ADDPRODUCTSUCCESS})
        dispatch(getallproducts(0))
        navigate('/products')
    } catch (error) {
        dispatch({
            type:PRODUCTFAILED,payload:error
        })

    }

}
/**
 * @method DELETE /product/:id
 * @description delete one product
 * @acces public
 */
export const deleteproduct=(id)=>async(dispatch)=>{
    dispatch({
        type:LOADING
    })
    
    try {
        const res=await axios.delete(`/product/${id}`)
        console.log('res', res.data)
        alert(`${res.data.msg}`)
        dispatch ({type:DELETEPRODUCTSUCCESS})
        dispatch(getallproducts(0))
       
    } catch (error) {
        dispatch({
            type:PRODUCTFAILED,payload:error
        })

    }

}