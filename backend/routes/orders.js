const express = require('express');
const router = express.Router();

// In-memory orders storage (use database in production)
let orders = [];
let orderIdCounter = 1;

// POST create new order
router.post('/', (req, res) => {
  const { customerName, phone, email, address, items, totalAmount } = req.body;

  if (!customerName || !phone || !items || !totalAmount) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const newOrder = {
    id: orderIdCounter++,
    customerName,
    phone,
    email,
    address,
    items,
    totalAmount,
    status: 'pending',
    createdAt: new Date().toISOString()
  };

  orders.push(newOrder);
  res.status(201).json({ message: 'Order placed successfully', order: newOrder });
});

// GET all orders
router.get('/', (req, res) => {
  res.json(orders);
});

// GET order by ID
router.get('/:id', (req, res) => {
  const order = orders.find(o => o.id === parseInt(req.params.id));
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }
  res.json(order);
});

// PUT update order status
router.put('/:id/status', (req, res) => {
  const { status } = req.body;
  const order = orders.find(o => o.id === parseInt(req.params.id));
  
  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
  }

  order.status = status;
  res.json({ message: 'Order status updated', order });
});

module.exports = router;