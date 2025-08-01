import mongoose from "mongoose";
import { config } from "dotenv";

config();

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("monngodb connected")
    }catch(error){
        console.log("mongodb connection unsuccesful")
    }
}

export default connectDB