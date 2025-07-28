import express from "express";
import dotenv from "dotenv";

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000

import routes from "./routes/index.js"
app.get("/",routes)

app.listen(PORT,(err)=>{
    if(err){
        console.log("ERROR OCCURRED",err);
        return 
    }
    console.log("SERVER STARTED AT PORT ",PORT);
})