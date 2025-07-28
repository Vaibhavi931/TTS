import express from "express";
import dotenv from "dotenv";

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000

app.get("/",(req,res)=>{
    return res.send("<h1>Server Running</h1>")
})

app.listen(PORT,(err)=>{
    if(err){
        console.log("ERROR OCCURRED",err);
        return 
    }
    console.log("SERVER STARTED AT PORT ",PORT);
})