import express from "express";
const app = express()

app.get("/",(req,res)=>{
    return res.send("<h1>Server Running</h1>")
})

app.listen(8000,(err)=>{
    if(err){
        console.log("ERROR OCCURRED",err);
        return 
    }
    console.log("SERVER STARTED AT PORT ",8000);
})