import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();

app.use(cors({
    origin:process.env.ORIGIN_URL
}));
app.use(express.json({
    limit:process.env.JSON_LIMIT
}));
app.use(express.urlencoded({
    extended:true,
    limit: process.env.JSON_LIMIT
}));
app.use(express.static("public"));
app.use(cookieParser());



export {app};


