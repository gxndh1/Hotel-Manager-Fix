import express from "express"; // Core framework for building the backend server
import dotenv from "dotenv"; // Module to load environment variables from a .env file
import path from "path"; // Node.js utility for resolving folder and file paths
import { fileURLToPath } from 'url'; // Utility to handle ES module file paths
import { connectDB } from "./config/db.js"; // Our custom function to connect to MongoDB
import cors from "cors"; // Middleware to allow frontend (localhost:5173) to talk to backend
import helmet from "helmet"; // Security middleware to protect HTTP headers
import rateLimit from "express-rate-limit";
import hotelRouter from "./routes/hotel.routes.js";
import authRouter from "./routes/auth.routes.js";
import roomRouter from "./routes/room.routes.js";
import bookingRouter from "./routes/booking.routes.js";
import paymentRouter from "./routes/payment.routes.js";
import reviewRouter from "./routes/review.routes.js";
import loyaltyRouter from "./routes/loyalty.routes.js";
import redemptionRouter from "./routes/redemption.routes.js";
import managerRouter from "./routes/manager.routes.js";
import adminRouter from "./routes/admin.routes.js";

// Load global .env from project root
// Since we are using modern "ES Modules" (import/export), __dirname isn't available by default.
// These two lines recreate __dirname so we can point dotenv to the root folder's .env file.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express(); // Initialize the Express application
const PORT = process.env.PORT || 5600; // Use port from .env, or fallback to 5600

// Connect to the MongoDB Database
connectDB();

// ==========================================
// MIDDLEWARES
// Middlewares are functions that run before the request hits our routes.
// ==========================================

// Parse incoming request bodies in JSON format (so we can read req.body)
app.use(express.json());
// Parse URL-encoded data (like form submissions)
app.use(express.urlencoded({ extended: false }));

// Security headers: helmet protects the app from some well-known web vulnerabilities 
app.use(helmet());

// rate limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 2000, // increased for development testing (React StrictMode makes many requests)
    standardHeaders: true,
    legacyHeaders: false,
    message: {
        success: false,
        message: "Too many requests from this IP, please try again after 15 minutes"
    }
});
app.use(limiter);

// CORS SET UP
app.use(cors({
    origin: ["http://localhost:5173", "http://192.168.0.115:5173", "http://127.0.0.1:5173"],
    credentials: true
}));

// Cookie parser: Allows us to read JWT tokens stored securely in cookies
import cookieParser from "cookie-parser";
app.use(cookieParser());

// Default fallback route to test if the server is alive
app.get("/", (req, res) => {
    res.send("Server is running perfectly!!!");
});

// ==========================================
// API ROUTES
// Mounting feature-specific route files to specific URL paths
// ==========================================

// ✅ Mount the auth routes for login/register
app.use("/api/auth", authRouter);

// Mount hotel endpoints
app.use("/api/hotels", hotelRouter);

// Mount room endpoints
app.use("/api/rooms", roomRouter);

// Mount booking endpoints
app.use("/api/bookings", bookingRouter);

// Mount payment endpoints
app.use("/api/payments", paymentRouter);

// Mount review endpoints
app.use("/api/reviews", reviewRouter);

// Mount loyalty endpoints
app.use("/api/loyalty", loyaltyRouter);

// Mount redemption endpoints
app.use("/api/redemptions", redemptionRouter);

// Mount manager endpoints
app.use("/api/manager", managerRouter);

// Mount admin endpoints
app.use("/api/admin", adminRouter);

// ==========================================
// ERROR HANDLING
// This global error handler catches any crashes in the routes and sends a clean JSON response
// ==========================================
app.use((err, req, res, next) => {
    console.error("Error:", err);
    if (err && err.stack) console.error(err.stack); // Print the error stack trace to terminal

    // Send a safe, structured JSON error back to the frontend instead of an HTML crash page
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Server error"
    });
});

// Running the server
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
