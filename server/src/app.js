import express from "express";
import cookieparser from "cookie-parser"
import cors from "cors"
import { corsOptions } from "./config/corsOptions.js";

const app = express();

app.use(cors(corsOptions)); //configure from which url the data is coming from front end

app.use(express.json({limit: "10kb"})) //data limit for front end form

app.use(express.urlencoded({extended: true,limit: "16kb"}))

app.use(express.static("public"))

app.use(cookieparser())

export default app;