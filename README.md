# 🛒 Full Stack E-Commerce Website (MERN + Redux)
A fully functional E-Commerce web application built using the MERN Stack (MongoDB, Express.js, React.js, Node.js) and Redux for state management.

## 🚀 Features

### User Features

* User Authentication (Login/Register)
* Secure JWT Authentication
* Browse Products
* Product Categories
* Product Search
* Shopping Cart
* Wishlist Functionality
* Checkout Process
* Order Management
* Responsive Design

### Admin Features

* Admin Dashboard
* Manage Products
* Add/Edit/Delete Products
* Manage Orders
* Manage Users
* Inventory Management

## 🛠️ Tech Stack

### Frontend

* React.js
* Redux Toolkit
* React Router DOM
* Axios
* Tailwind CSS / CSS
* React Icons

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

### Authentication

* JWT (JSON Web Token)
* bcryptjs

### Other Tools

* Cloudinary (Image Storage)
* Multer
* dotenv

## 📂 Project Structure

```bash
ecommerce-project/
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── assets/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── utils/
│
└── README.md
```

## ⚙️ Installation

### Clone Repository

```bash
git clone <repository-url>
cd ecommerce-project
```

### Install Backend Dependencies

```bash
cd backend
npm install
```

### Install Frontend Dependencies

```bash
cd frontend
npm install
```

## 🔑 Environment Variables

Create a `.env` file inside the backend folder:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## ▶️ Run Application

### Backend

```bash
npm run server
```

### Frontend

```bash
npm start
```

## 🌐 API Endpoints

### Authentication

```http
POST /api/users/register
POST /api/users/login
GET  /api/users/profile
```

### Products

```http
GET    /api/products
GET    /api/products/:id
POST   /api/products
PUT    /api/products/:id
DELETE /api/products/:id
```

### Orders

```http
POST /api/orders
GET  /api/orders/myorders
GET  /api/orders/:id
```

## 🎯 Learning Outcomes

Through this project, I learned:

* MERN Stack Development
* REST API Development
* Redux State Management
* Authentication & Authorization
* MongoDB Database Design
* Image Upload Handling
* Full Stack Deployment
* Secure Backend Practices

## 📈 Future Improvements

* Payment Gateway Integration (Stripe/Razorpay)
* Product Reviews & Ratings
* Email Notifications
* Coupon System
* Multi-Vendor Support
* Real-Time Order Tracking

## 👨‍💻 Author

**Yatish Taneja**

* MERN Stack Developer
* AI & ML Enthusiast
* Open Source Learner

---

⭐ If you found this project helpful, consider giving it a star on GitHub!

<!-- Last updated: June 2026 -->