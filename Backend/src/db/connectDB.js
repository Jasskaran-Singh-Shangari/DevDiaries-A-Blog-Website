import mongoose from "mongoose"
import { app } from "../app.js"
import { DB_NAME } from "../constants.js"

export const connectDB=async ()=>{
    try {
        const connectionInstance=await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`)
        console.log(`The database BLOGApp is connected ${connectionInstance}`)
    } catch (error) {
        console.log(error)
    }
}

