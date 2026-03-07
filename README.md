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

## ⚙️ Login Credentials

*Role: `User`
*email: `animesh@user.com`
*Password: `animesh@123`

*Role: `Manager`
*email: `animesh@manager.com`
*Password: `animesh@123`

*Role: `Admin`
*email: `admin@hotel.com`
*Password: `admin123`

---

## 🎤 Project Presentation & Interview Walkthrough Script

*You can use the following script as a guide to confidently explain your project during an interview or presentation.*

**"Hello, and thank you for taking the time to review my project. Today, I'd like to walk you through the Smart Hotel Management System I've developed. This is a comprehensive, full-stack application built using the MERN stack—MongoDB, Express.js, React, and Node.js. My main goal with this project was to create a robust, end-to-end platform that handles everything from guest bookings to hotel management and system-wide administration."**

### 1. Introduction & Architecture
**"To start, let me briefly explain the architecture.** On the frontend, I used React powered by Vite for fast builds and a smooth development experience. For state management, I utilized Redux Toolkit, which cleanly orchestrates global states like authentication, bookings, and our loyalty program. The UI is built using custom CSS integrated with Bootstrap to ensure a responsive design across all devices.

On the backend, I have a Node.js and Express server handling the API endpoints. The data is securely stored in a MongoDB database using Mongoose schemas. For security, I've implemented JWT for session management via HTTP-only cookies, bcryptjs for password hashing, and additional middlewares like Helmet and Express Rate Limit to ensure the APIs are secure against common web vulnerabilities."

### 2. The Guest Experience
**"Let’s dive into the application from a Guest's perspective.** When a user visits the platform, they can seamlessly browse hotels dynamically by location. 

Once authenticated, they can view detailed property pages—complete with amenities, room types, and images. The booking flow checks real-time room availability and automatically calculates pricing and taxes. One feature I'm particularly proud of is the **Loyalty Program**: guests earn points for every booking (e.g., 1 point per ₹100 spent), which they can then redeem for discounts on future stays. Guests also have a dedicated personal dashboard to manage their active reservations, view payment statuses, or cancel bookings securely."

### 3. The Hotel Manager Dashboard
**"Now, let's switch hats and look at the Hotel Manager's side.** A hotel manager has a protected, role-based dashboard where they can oversee their specific properties. They can add new hotels, edit property details, and dynamically manage room tiers under each property—like Standard, Deluxe, or Suite—along with their respective pricing. They can track incoming guest reservations, update booking statuses, and visually monitor room availability, giving them full operational control."

### 4. The Administrator Panel
**"Finally, overlooking the entire platform is the Admin role.** The Admin Dashboard provides unhindered oversight of the entire system. From here, an admin can manage all registered users on the system, whether they are guests or managers, and monitor platform-wide metrics and total bookings to ensure everything is running smoothly."

### 5. Conclusion & Technical Highlights
**"In building this, one of the main technical focuses was** managing complex, interconnected states between the user's session, dynamic loyalty points, and stateful bookings across multiple screens, which is why Redux Toolkit was a perfect fit. I also ensured that the backend API routes were rigorously protected with strict role-based authorization middleware, so a standard guest absolutely cannot access manager or admin routes.

**Overall, this project showcases my ability to design scalable NoSQL database schemas, implement secure, role-based authentication setups, manage complex frontend states, and deliver a polished, responsive user interface communicating seamlessly with an API. I'd be happy to dive deep into any code snippets or answer any questions you might have about the implementation!"**
