import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';
dotenv.config();
const port = process.env.PORT;


connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server running on port http://localhost:${port}`);
    })
})
.catch((error)=>{
    console.error('MongoDB connection FAILED: ',error);
});







