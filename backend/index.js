require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./router/auth-router.js");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router.js");
const adminRoute = require("./router/admin-router.js");
const connectDB = require("./utils/db.js");
const errorMiddleware = require("./middleware/error-middleware.js");

// Use environment variable or default value for CORS origin
const corsOptions = {
  origin: process.env.FRONTEND_URL || "http://localhost:5174",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/contact", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the MERN webApp projects 2024");
});

// Error Middleware
app.use(errorMiddleware);

// Use dynamic port for deployment or fallback to local port
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
