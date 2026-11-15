import dotenv from "dotenv/config"
import dbConnection from "./config/db.js"
import app from "./app.js";

const port = process.env.PORT || 5000;

dbConnection()
    .then(() => {
        app.listen(port, () => {
            console.log(`server is running on ${port}`)
        })
    })
    .catch((err) => {
        console.log("db connection error",err);
        process.exit(1)
    })