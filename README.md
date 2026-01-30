# 🛍️ ShoppyGlobe E-Commerce Application

ShoppyGlobe is an online shopping web application built using **React** and **Vite**.  
This application allows users to browse products, search items, view detailed product information, manage a shopping cart, and place orders using Redux for state management.

---

## 🚀 Features

### 🏠 Home Page
- Displays list of products fetched from API
- Search bar to filter products by name
- Product cards with image, title, price (in ₹), and "Add to Cart" button
- Navigation bar with links to Home and Cart

### 📦 Product Details Page
- Displays full details of selected product using dynamic routing (`/product/:id`)
- Shows product image, description, brand, category, and price (₹)
- "Add to Cart" button

### 🛒 Cart Page
- Displays all added products
- Increase or decrease quantity (minimum 1)
- Remove items from cart
- Displays total price in INR
- Button to proceed to checkout

### 💳 Checkout Page
- Form to collect user details (Name, Email, Address)
- Displays order summary with total amount
- "Place Order" button clears cart and redirects to Home page with confirmation message

### ❌ 404 Page
- Displays "Page Not Found" message
- Shows invalid route
- Includes link back to Home page

---

## 🛠 Technologies Used

- React (Functional Components & Hooks)
- Vite
- React Router DOM (createBrowserRouter)
- Redux Toolkit
- React Redux
- JavaScript (ES6+)
- CSS (Responsive Design)

---

## 📂 Project Structure

```
src/
│
├── app/
│   └── store.js
│
├── features/
│   ├── cart/cartSlice.js
│   └── products/productsSlice.js
│
├── hooks/
│   └── useFetchProducts.js
│
├── utils/
│   └── currency.js
│
├── components/
│   ├── Header.jsx
│   ├── ProductItem.jsx
│   └── CartItem.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   └── NotFound.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Tanuj-2531/ShoppyGlobe
cd shoppyglobe
```

*(Replace the link above with your actual GitHub repository link)*

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start Development Server

```bash
npm run dev
```

### 4️⃣ Open in Browser

After running the command, open the link shown in the terminal, usually:

http://localhost:5173

---

## 🧠 How the App Works

- Products are fetched from API using a custom hook
- Redux manages cart state and search term
- Dynamic routing is used for product details
- Currency is converted from USD to INR using a helper function
- Placing an order clears the cart and redirects to home
- Invalid routes display a custom 404 page

---

## 🧪 Assignment Requirements Covered

✔ Created using Vite  
✔ Product listing with API fetch  
✔ Dynamic routing for product details  
✔ Redux for cart management  
✔ Search feature using Redux state  
✔ Add/Remove cart functionality  
✔ Quantity control in cart  
✔ Checkout page with order placement  
✔ Cart cleared after order  
✔ Custom 404 page  
✔ Lazy loading of components  
✔ Responsive styling  
✔ Clean folder structure  

---

## 🔮 Future Improvements

- Add payment gateway integration  
- Save cart data in Local Storage  
- Add product categories filter  
- Add user authentication  

---

## 👨‍💻 Author

Tanuj Agarwal  
GitHub: https://github.com/Tanuj-2531

---

## 📄 License

This project is for educational purposes.