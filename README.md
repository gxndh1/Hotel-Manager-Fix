# Smart Hotel Booking System

A comprehensive, full-stack Hotel Booking and Management System built with the MERN stack (MongoDB, Express.js, React, Node.js). This platform allows users to browse and book hotel rooms securely, provides a dedicated dashboard for hotel managers to oversee properties natively, and includes an admin panel for platform-wide control.

---

## 🌟 Key Features

### For Guests
* **Authentication:** Secure Login/Signup with robust JWT session management and encrypted passwords.
* **Search & Filter:** Browse hotels dynamically by location.
* **Property Details:** View hotel amenities, room types, images, and reviews before booking.
* **Integrated Booking:** Securely book rooms with real-time availability checking and automated price/tax calculation.
* **Loyalty Program:** Earn points on every successful booking (1 point per ₹100 spent) and redeem them for discounts on future stays!
* **Booking Management:** View active bookings, monitor payment status, and securely cancel reservations if needed.

### For Hotel Managers
* **Manager Dashboard:** A centralized, authenticated hub to control individual hotel operations.
* **Property Management:** Add new hotels, edit details organically, and define locations.
* **Room Management:** Dynamically create, price, and monitor different room tiers (Standard, Deluxe, Suite, etc.) under each property.
* **Booking Oversight:** Track incoming reservations, update statuses, and monitor room availability.

### For Administrators
* **Admin Dashboard:** Full, unhindered oversight of the entire system.
* **User Control:** Handle all registered users (Guests and Managers).
* **System Monitoring:** Oversee platform-wide metrics, bookings, and operations.

---

## 🛠 Tech Stack & Architecture

### Frontend Architecture (Client)
* **Framework:** React.js powered by Vite for lightning-fast HMR and building.
* **State Management:** Redux Toolkit orchestrates global states for Authentication, Bookings, Hotels, Rooms, and Loyalty Points.
* **Routing:** React Router DOM provides a seamless Single Page Application (SPA) experience with protected routes.
* **Styling & UI:** Custom CSS integrated heavily with Bootstrap components and React Icons for responsive, scalable UI across all devices.
* **API Handling:** Automated Fetch API integration natively communicating with backend endpoints.

### Backend Architecture (Server)
* **Environment:** Node.js runtime driving an Express.js server framework.
* **Database:** MongoDB acts as the NoSQL document store, natively controlled via Mongoose schemas and models.
* **Authentication:** JSON Web Tokens (JWT) are strictly utilized for payload encryption, role-based authorization, and persistent sessions via HTTP-Only cookies.
* **Security Middleware:** 
  * `bcryptjs` for irreversible password hashing.
  * `helmet` to secure HTTP headers.
  * `express-rate-limit` to prevent repeated DDoS or brute-force API attacks.
  * `cors` specifically configured for strict Domain Origin permissions.

---

## � Project Structure

```text
Smart-Hotel-Booking-System/
│
├── client/                     # Frontend Application
│   ├── src/
│   │   ├── components/         # Reusable UI components (Auth, Layout, Forms)
│   │   ├── pages/              # Primary route views (Home, Dashboards, Account)
│   │   ├── redux/              # RTK Slices (authSlice, bookingSlice, etc.)
│   │   ├── assets/             # Static images and UI assets
│   │   ├── App.jsx             # Root router provider
│   │   └── main.jsx            # React mounting point
│   └── package.json            # Client dependencies
│
├── server/                     # Backend API Node
│   ├── config/                 # DB Connection & Configuration files
│   ├── controllers/            # Core business logic natively handling req/res
│   ├── middleware/             # Auth/Role extraction & Error handling
│   ├── models/                 # Mongoose DB Schemas (User, Hotel, Booking, etc.)
│   ├── routes/                 # Express API Endpoint definitions
│   ├── seed.js                 # Database mass-population script
│   ├── index.js                # Primary server entrypoint
│   └── package.json            # Server dependencies
│
└── .env                        # Global secret environment variables
```

---

## ⚙️ Environment Configuration

To successfully run this project locally, create a `.env` file in your root operating directory consisting of the following keys:

```ini
# Server Configuration
PORT=5600
NODE_ENV=development

# Database Configuration (Modify to match your connection string)
MONGO_URL=mongodb://localhost:27017/smart-hotel-booking

# JWT Configuration
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d

# Frontend Configuration
FRONTEND_URL=http://localhost:5173

# Application-Specific Variables
LOYALTY_POINTS_RATE=1
POINTS_VALUE=1
```

---

## 🚀 Process to run the Application

Follow these exact steps to get the project completely hosted and running on your local machine:

1. Download the zip file, extract it, and open the folder inside **VS Code**.
2. Add the `.env` file (containing the variables listed above) directly in the root directory.
3. Open a terminal, move into the server folder, and install all backend modules:
   ```bash
   cd server
   npm i
   ```
4. Start the backend Node server using:
   ```bash
   npm run start
   ```
5. Open **MongoDB Compass** application and visually connect to your active local database.
6. Return to your terminal and kill the backend server by pressing `Ctrl+C`.
7. Seed your newly connected database with the initial app data, and then seamlessly restart the server:
   ```bash
   npm run seed
   npm run start
   ```
8. Refresh **MongoDB Compass** to verify that the mock data (hotels, rooms, user accounts) has been successfully populated inside your collections.
9. Open a completely **new terminal window**, navigate to the client folder, install modules natively, and launch the frontend environment:
   ```bash
   cd client
   npm i
   npm run dev
   ```

*The frontend UI framework will now automatically launch on `http://localhost:5173`, successfully bridging APIs and authentication tokens with the backend Node instance running on port `5600`.*
