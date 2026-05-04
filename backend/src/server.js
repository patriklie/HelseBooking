import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import timeRoutes from "./routes/timeRoutes.js";
import klinikkRoutes from "./routes/klinikkRoutes.js";
import { connectDB } from "./lib/db.js";
import cors from "cors";

dotenv.config();

await connectDB();

const port = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173"
}));

app.get("/api/hello", (req, res) => {
    res.json({ message: "Hello mister api hello" });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/time", timeRoutes);
app.use("/api/klinikk", klinikkRoutes);

app.listen(port, () => {
    console.log(`Server is running, listening on port ${port}`);
});