const express = require('express');
const router = express.Router();

const productController = require('../controllers/productController');

//  GET /products
router.get('/', productController.getProducts);

// POST /products
router.post ('/add', productController.addProduct);

// GET /products/:id
router.get ('/:id', productController.getProductDetails);

// PUT /products/:id
router.put ('/:id', productController.updateProduct);

// DELETE /products/:id
router.delete ('/:id', productController.deleteProduct);

module.exports = router;