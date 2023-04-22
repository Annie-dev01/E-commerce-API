const express = require('express');
const router = express.Router();

const {createProduct, getAllProducts, getProduct, updateProduct, updateProductPut, deleteProduct} = require('../controllers/products')

router.route('/').post(createProduct).get(getAllProducts)
router.route('/:id').get(getProduct).patch(updateProduct).put(updateProductPut).delete(deleteProduct)
 
module.exports = router;