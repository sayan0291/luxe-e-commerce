import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import { corsOptions } from "./middlewars/cors.middleware.js";

const app = express();

//express js middleware config

app.use(cors(corsOptions))
//json payload parser
app.use(express.json({limit: "10kb"})) //data which coming from front end it transfer the data in json
app.use(express.urlencoded({extended: true,limit: "10kb"})) //express and process data from front end html form
app.use((express.static('public'))) //servers the static folder file's static
app.use(cookieParser()) //set browser cookieserver

import UserRouter from "./routes/user.route.js";
app.get('/api/v1/',(req,res) => {
    res.send({message: "hello wellcome to backend server"})
})

app.use('/api/v1/user',UserRouter)

export default app;