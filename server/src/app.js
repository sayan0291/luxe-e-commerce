import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

//express js middleware config

app.use(cors({
    origin: process.env.CORS_ORIGIN, //accept only from this url
    credentials: true
}))
//json payload parser
app.use(express.json({limit: "10kb"})) //data which coming from front end it transfer the data in json
app.use(express.urlencoded({extended: true,limit: "10kb"})) //express and process data from front end html form
app.use((express.static('public'))) //servers the static folder file's static
app.use(cookieParser()) //set browser cookieserver

import UserRouter from "./routes/user.route";

app.use('user',UserRouter)

export default app;