import express from "express";
const app= express();
import Connection from './Database/db.js'
import route from "./routes/routes.js";
import cors from 'cors'
import bodyParser from "body-parser";

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use('/',route)
Connection();

let port=5000;
app.listen(port,"localhost",(req,res)=>{
    console.log(`server is running at :http://localhost:${port}/`)
})