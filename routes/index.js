import express from "express";
const router = express.Router()

router.get("/",(req,res)=>{
    return res.send("<h1>Server Running</h1>")
})

export default router