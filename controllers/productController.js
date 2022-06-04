const Product = require('../models/products');

// GET /products
exports.getProducts = (req, res, next) => {
    Product.find()
        .then(products => {
            res.status(200).json({
                message: 'Products fetched successfully',
                products: products
            });
        }
        ).catch(err => {
            res.status(500).json({
                message: 'Fetching products failed'
            });
        }
        );
}

// POST /products/add
exports.addProduct = (req, res, next) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price
    });
    product.save()
        .then(result => {
            res.status(201).json({
                message: 'product added successfully!!!',
                data: product
            });
        }
        ).catch(err => {
            res.status(500).json({
                error: err
            });
        }
        );
}

// GET /products/:id
exports.getProductDetails = (req, res, next) => {
    const id = req.params.id;
    Product.findById(id)
        .then(product => {
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({
                    message: 'Product not found'
                });
            }
        }
        ).catch(err => {
            res.status(500).json({
                error: err
            });
        }
        );
}

// PUT /products/:id
exports.updateProduct = (req, res, next) => {
    const id = req.params.id;
    const updateOps = {};
    for (const ops of Object.keys(req.body)) {
        updateOps[ops] = req.body[ops];
    }
    Product.update({ _id: id }, { $set: updateOps })
        .then(result => {
            res.status(200).json({
                message: 'Product updated successfully',
                data: result
            });
        }
        ).catch(err => {
            res.status(500).json({
                error: err
            });
        }
        );
}

// DELETE /products/:id
exports.deleteProduct = (req, res, next) => {
    const id = req.params.id;
    Product.deleteOne({ _id: id })
        .then(result => {
            res.status(200).json({
                message: 'Product deleted successfully',
                data: result
            });
        }
        ).catch(err => {
            res.status(500).json({
                error: err
            });
        }
        );
}
