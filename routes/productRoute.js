const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

router.get('/', productController.getProducts);

router.post ('/add', productController.addProduct);

router.get ('/:id', productController.getProductDetails);

router.put ('/:id', productController.updateProduct);

router.delete ('/:id', productController.deleteProduct);

module.exports = router;