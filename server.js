import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";

// Configure environment variables
dotenv.config()

// Database configuration
connectDb();

// Create the express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/auth", authRoutes);

// Define the PORT
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(
    `Server is running on port ${PORT}`
  );
});
