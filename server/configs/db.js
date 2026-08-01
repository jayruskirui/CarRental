import mongoose from "mongoose";

import { setServers } from "node:dns/promises";
setServers(["1.1.1.1"]);


const connectDB = async () => {
    try {
      mongoose.connection.on('connected', ()=> console.log("Database connected💯"));
      await mongoose.connect (`${process.env.MONGODB_URI}/CarRental`)
       
    } 
    catch (error) {
        console.log(error.message)
    }
}

export default connectDB