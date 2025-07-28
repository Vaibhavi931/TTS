import mongoose from "mongoose";
import dotenv from "dotenv"
import chalk from "chalk";
dotenv.config()

const DB_URL = process.env.DB_URL
mongoose.connect(DB_URL);

const db = mongoose.connection;

db.on('error',console.error.bind(console,'ERROR CONNECTING MONGODB'));

db.once('open',function(){
    const info = console.info.bind(console,chalk.bgWhiteBright.green('DATABASE '))
    info(chalk.green("CONNECTED ...")); 
    info(chalk.green("URL : ",DB_URL))
})

export default db