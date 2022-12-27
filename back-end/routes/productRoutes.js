const express=require('express')
const { addProd,getAllProds,getOneProduct,deleteOneProduct,updateOneProduct } = require('../controllers/productControllers')
const { filterProduct } = require('../middlewares/filterProducts')
const router=express.Router()
//addProduct
/**
 * @method POST /product/add
 * @description add new product
 * @acces public
 */
router.post('/add',addProd)

//getProduct
/**
 * @method GET /product/
 * @description get all products
 * @acces public
 */
router.get('/',filterProduct,getAllProds)

//getOneProduct
/**
 * @method GET /product/:id
 * @description get one product
 * @acces public
 */
router.get('/:id',getOneProduct)

//deleteOneProduct
/**
 * @method DELETE /product/:id
 * @description delete one product
 * @acces public
 */
router.delete('/:id',deleteOneProduct)

//updateOneProduct
/**
 * @method PUT /product/
 * @description update one product
 * @acces public
 */
router.put('/:id',updateOneProduct)
module.exports=router