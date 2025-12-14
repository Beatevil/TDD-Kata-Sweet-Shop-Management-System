# Chaudhary & Sons Sweet Shop - Backend API

## Setup Instructions

1. **Install Dependencies**
   ```bash
   cd backend
   npm install
   ```

2. **Environment Setup**
   - Copy `.env` file and update with your configurations
   - Set up MongoDB connection string
   - Configure email settings for contact form

3. **Run the Server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get product by ID
- `GET /api/products/category/:category` - Get products by category

### Orders
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get order by ID
- `PUT /api/orders/:id/status` - Update order status

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact messages
- `GET /api/contact/branches` - Get branch information

### Health Check
- `GET /api/health` - Server health status

## Sample API Usage

### Create Order
```json
POST /api/orders
{
  "customerName": "John Doe",
  "phone": "+91 9876543210",
  "email": "john@example.com",
  "address": "123 Main St, Muzaffarnagar",
  "items": [
    {"productId": 1, "quantity": 2, "price": 250}
  ],
  "totalAmount": 500
}
```

### Submit Contact Form
```json
POST /api/contact
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+91 9876543210",
  "subject": "Bulk Order Inquiry",
  "message": "I need 100 boxes of mixed sweets for a wedding."
}
```

## Server runs on: http://localhost:5000