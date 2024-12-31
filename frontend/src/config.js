// src/config.js
export const API_BASE_URL =
    import.meta.env.MODE === "production"
        ? "https://mern-webapp-api.onrender.com" // Backend URL on Render
        : "http://localhost:5000"; // Backend URL for local development
