import mongoose from "mongoose";
import {DB_NAME} from './constants.js'
import 'dotenv/config'

import express from "express"
const app=express();
import connectDB from "./db/index.js";
connectDB()

/*(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("mongoDB is connected");
        app.on("error",(error)=>{
           console.log("ERROR:",error);
           throw error
        })
        app.listen(process.env.PORT,()=>
    {
          console.log(`app is listing on PORT ${process.env.PORT}`);
    })
    } catch (error) {
        console.error("ERROR:",error)
        throw error
    }
})();*/