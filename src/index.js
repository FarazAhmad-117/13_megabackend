import express from 'express'
import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

connectDB();



app.get('/',(req,res)=>{
    res.send("CH Dropshipping");
})


app.listen(port,()=>{
    console.log(`Server running on port http://localhost:${port}`);
})



