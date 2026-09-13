import dotenv from "dotenv/config";
import app from "./app.js";
import { connectDb } from "./src/db/dbConnection.js";
const port = process.env.PORT || 5000

connectDb()
.then(() => {
    app.listen(port,() => {
        console.log(`mongo db connected successfully on port ${port}`)
    })
})
.catch((error) => {
    console.log(`mongo db connection error ${error}`)
})