import express from "express";
import "dotenv/config";
// import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./configs/db.js";

//Initialize Express App
const app = express()

//connect database
await connectDB()


//Middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>res.send("Server is running"))

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`))