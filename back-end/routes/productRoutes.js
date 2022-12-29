const express=require('express')
const { addProd,getAllProds,getOneProduct,deleteOneProduct,updateOneProduct } = require('../controllers/productControllers')
const { filterProduct } = require('../middlewares/filterProducts')
const upload = require('../utils/multer')
const router=express.Router()
//addProduct
/**
 * @method POST /product/add
 * @description add new product
 * @acces public
 */
router.post('/add',upload('products').single('file'),addProd)

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
 * @method PUT /product/:id
 * @description update one product
 * @acces public
 */
router.put('/:id',upload('products').single('file'),updateOneProduct)
module.exports=router