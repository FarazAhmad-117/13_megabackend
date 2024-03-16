import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

const connectDB = async()=>{
    try {
        // const connectionInstance = await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`) // Online DATABASE
        const connectionInstance = await mongoose.connect(`${process.env.OFFLINE_DATABASE_URL}/${DB_NAME}`) // Offline DATABASE
        console.log(`Connected to database at host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log('MONGODB connection FAILED',error);
        process.exit(1);
    }
}


export default connectDB;



