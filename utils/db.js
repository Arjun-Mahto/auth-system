import mongoose from "mongoose"

import dotenv from "dotenv"
dotenv.config()

const db =()=>{
    mongoose
    .connect(process.env.MONGO_URL)
.then(()=>{
    console.log("connected");
})
.catch(()=>{ 
    console.log("error")
})

}
export default db;