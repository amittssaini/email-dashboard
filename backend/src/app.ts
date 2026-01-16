import express from "express";
import emailRoutes from "./routes/email.route"

const app = express();
app.use(express.json());

// Health check
app.get("/health", (_req, res) => res.send("Backend is running 🚀"));

// Use email routes
app.use("/api/email", emailRoutes);

export default app;
