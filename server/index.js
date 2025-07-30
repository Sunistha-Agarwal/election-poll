import express from "express";
import { config } from "dotenv";
import connectDB from "./db/db.config.js";

config()
connectDB()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})