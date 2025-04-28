import express, { Router } from "express"
import dotenv from "dotenv"
import cors from "cors"



import userRoutes from "./routes/user.routes.js";

import db from "./utils/db.js"
// // import all routes

db();

//dotenv.config()


const app= express();


app.use(
    cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ['GET','POST','DELETE','OPTION'],
    allowedHeaders: ['Content-type','Authorization']
})
);
app.use(express.json())

app.use(express.urlencoded({extended:true})) // for header data encoding 
const port= process.env.PORT || 4000;



app.get("/", (req,res)=>{
    res.send("cohort");
});

app.get("/arjun",(req,res)=>{
    console.log("Received GET /arjun");
    res.send("mahto");
});
//console.log(process.env)
// connect to db


// user routes
 app.use("/api/v1/users", userRoutes)

 app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
 })
