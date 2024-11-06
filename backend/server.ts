import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import taskRoutes from "./Routes/taskRoutes";

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Connexion à MongoDB
mongoose
  .connect("mongodb://localhost:27017/taskManagerDB")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Utilisation des routes
app.use(taskRoutes);

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
