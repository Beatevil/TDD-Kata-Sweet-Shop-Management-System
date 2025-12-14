const express = require('express');
const router = express.Router();

// Sample products data
const products = [
  {
    id: 1,
    name: 'Gulab Jamun',
    description: 'Soft, spongy and delicious traditional gulab jamun',
    category: 'Sweets',
    price: 250,
    image: 'gulab-jamun.jpg',
    inStock: true
  },
  {
    id: 2,
    name: 'Kaju Katli',
    description: 'Premium cashew fudge, our signature specialty',
    category: 'Sweets',
    price: 450,
    image: 'kaju-katli.jpg',
    inStock: true
  },
  {
    id: 3,
    name: 'Shakarpara & Namkeen',
    description: 'Crispy shakarpara, mathri, sev and traditional namkeen',
    category: 'Namkeen',
    price: 180,
    image: 'namkeen.jpg',
    inStock: true
  }
];

// GET all products
router.get('/', (req, res) => {
  res.json(products);
});

// GET product by ID
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  res.json(product);
});

// GET products by category
router.get('/category/:category', (req, res) => {
  const categoryProducts = products.filter(p => 
    p.category.toLowerCase() === req.params.category.toLowerCase()
  );
  res.json(categoryProducts);
});

module.exports = router;