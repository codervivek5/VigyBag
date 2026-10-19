// products.js
const express = require('express');
const router = express.Router();
const productCtrl = require('../controllers/productController');
const { authenticate, requireAdmin } = require('../middlewares/authenticate');

// Public read routes
router.get('/products', productCtrl.getProducts);
router.get('/products/:id', productCtrl.getProductById);

// Admin-only write routes
router.post('/products', authenticate, requireAdmin, productCtrl.createProduct);
router.put('/products/:id', authenticate, requireAdmin, productCtrl.updateProduct);
router.patch('/products/:id', authenticate, requireAdmin, productCtrl.updateProduct);
router.delete('/products/:id', authenticate, requireAdmin, productCtrl.deleteProduct);

module.exports = router;