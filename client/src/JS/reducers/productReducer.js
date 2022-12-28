import { PRODUCTFAILED, GETALLPRODUCTSSUCCESS, LOADING } from "../actionTypes/productConst"

const initialState = {
    loading:true,
    products:[],
    error:null
}

export const productReducer= (state = initialState, { type, payload }) => {
  switch (type) {

  case LOADING:
    return { ...state,loading:true }
case GETALLPRODUCTSSUCCESS:
    return{...state,products:payload,loading:false}
    case PRODUCTFAILED:
        return{...state,loading:false,error:payload}
  default:
    return state
  }
}
