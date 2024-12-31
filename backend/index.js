require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

// Import routes and utilities
const authRoute = require("./router/auth-router.js");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router.js");
const adminRoute = require("./router/admin-router.js");
const connectDB = require("./utils/db.js");
const errorMiddleware = require("./middleware/error-middleware.js");

// Define allowed origins dynamically
const allowedOrigins = [
  "http://localhost:5174", // Frontend (Development)
  process.env.FRONTEND_URL, // Frontend (Deployed)
];

// console.log("Allowed Origins:", allowedOrigins);

// CORS Options
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (e.g., mobile apps, Postman)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET, POST, PUT, DELETE, PATCH, OPTIONS",
  credentials: true, // Allow cookies
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// API Routes
app.use("/api/auth", authRoute);
app.use("/api/contact", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);

// Serve frontend in production
console.log("production",process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../frontend/dist");

  console.log("frontendPath",frontendPath);
  
  app.use(express.static(frontendPath));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(frontendPath, "index.html"));
  });
}

// Root Route
app.get("/", (req, res) => {
  res.status(200).send("Welcome to the MERN webApp projects 2024");
});

// Error Middleware
app.use(errorMiddleware);

// Port Configuration
const port = process.env.PORT || 3000;

// Database Connection and Server Start
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error.message);
    process.exit(1); // Exit process if DB connection fails
  });
