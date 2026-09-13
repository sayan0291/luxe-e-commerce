import mongoose from "mongoose";
import { DB_NAME } from "../../constants.js";

export const connectDb = async () => {
    try {
        const conectionInstance = mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`mongo db connection successful ${conectionInstance}`)
    } catch (error) {
        console.log(`db connection error ${error}`)
    }
}