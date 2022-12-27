import axios from 'axios';
import { GETALLPRODUCTSFAILED, GETALLPRODUCTSSUCCESS, LOADING } from "../actionTypes/productConst"
/**
 * @method GET /product/
 * @description get all products
 * @acces public
 */
export const getallproducts=()=>async(dispatch)=>{
    dispatch({
        type:LOADING
    })
    try {
        const res=await axios.get('/product')
        dispatch ({type:GETALLPRODUCTSSUCCESS,payload:res.data.products})
    } catch (error) {
        dispatch({
            type:GETALLPRODUCTSFAILED,payload:error
        })

    }

}