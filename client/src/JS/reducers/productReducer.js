import { PRODUCTFAILED, GETALLPRODUCTSSUCCESS, LOADING, GETONEPRODUCTSUCCESS } from "../actionTypes/productConst"

const initialState = {
    loading:true,
    products:[],
    error:null,
    productDetailes:{}
}

export const productReducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case LOADING:
    return { ...state,loading:true }
case GETALLPRODUCTSSUCCESS:
    return{...state,products:payload,loading:false}
    case GETONEPRODUCTSUCCESS:
      return{...state,loading:false,productDetailes:payload}
    case PRODUCTFAILED:
        return{...state,loading:false,error:payload}

  default:
    return state
  }
}
