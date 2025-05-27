import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors' 
import {connectDB} from './config/db.js';
import { authRoutes } from './routes/auth.routes.js';

dotenv.config();
const port = process.env.PORT || 8000
const app = express();

app.use(
    cors({
        origin: process.env.CLIENT_URL || "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.use(express.json())
connectDB()

app.use("/api/auth", authRoutes)



app.listen(port, () => {
    console.log(`✅ Server running on port ${port}`);
}).on("error", (err) => {
    console.error("❌ Server failed to start:", err.message);
})