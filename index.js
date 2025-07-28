import express from "express";
import dotenv from "dotenv";
import chalk from "chalk";

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000

//Setting up Mongoose Database
import db from './config/mongoose.js'

//Setting up Views
import expressLayouts from "express-ejs-layouts";
app.use(expressLayouts)
app.use(express.static('./assets'));
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);
app.set('view engine', 'ejs');//Set View Engine
app.set('views', './views');  //Set View renderer folder

//Setting up Routes
import routes from "./routes/index.js"
app.get("/",routes)

app.listen(PORT,(err)=>{
    if(err){
        console.log("ERROR OCCURRED",err);
        return 
    }
    console.log(chalk.blue("SERVER STARTED AT PORT ",PORT));
})