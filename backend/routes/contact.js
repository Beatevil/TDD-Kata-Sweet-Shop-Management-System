const express = require('express');
const router = express.Router();

// In-memory contact messages storage
let contactMessages = [];
let messageIdCounter = 1;

// POST submit contact form
router.post('/', (req, res) => {
  const { name, email, phone, message, subject } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required' });
  }

  const newMessage = {
    id: messageIdCounter++,
    name,
    email,
    phone,
    message,
    subject: subject || 'General Inquiry',
    createdAt: new Date().toISOString(),
    status: 'unread'
  };

  contactMessages.push(newMessage);
  
  res.status(201).json({ 
    message: 'Thank you for contacting us! We will get back to you soon.',
    messageId: newMessage.id
  });
});

// GET all contact messages
router.get('/', (req, res) => {
  res.json(contactMessages);
});

// GET branches info
router.get('/branches', (req, res) => {
  const branches = [
    {
      id: 1,
      city: 'Muzaffarnagar',
      address: 'Main Market, Muzaffarnagar, Uttar Pradesh',
      phone: '+91 98765 43210',
      email: 'muzaffarnagar@chaudharysons.com',
      isMain: true,
      hours: 'Mon-Sat: 9 AM - 9 PM, Sun: 9 AM - 8 PM'
    },
    {
      id: 2,
      city: 'Saharanpur',
      address: 'City Center, Saharanpur, Uttar Pradesh',
      phone: '+91 98765 43211',
      email: 'saharanpur@chaudharysons.com',
      isMain: false,
      hours: 'Mon-Sat: 9 AM - 9 PM, Sun: 9 AM - 8 PM'
    },
    {
      id: 3,
      city: 'Meerut',
      address: 'Main Bazaar, Meerut, Uttar Pradesh',
      phone: '+91 98765 43212',
      email: 'meerut@chaudharysons.com',
      isMain: false,
      hours: 'Mon-Sat: 9 AM - 9 PM, Sun: 9 AM - 8 PM'
    }
  ];
  
  res.json(branches);
});

module.exports = router;