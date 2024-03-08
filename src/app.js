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


// routes
import userRouter from './routes/user.routes.js'
import productRouter from './routes/product.routes.js';
import categoryRouter from './routes/category.routes.js';
import subcategoryRouter from './routes/subcategory.routes.js'
import collectionRouter from './routes/collection.routes.js';
import orderRouter from './routes/order.routes.js';
import userReviewRouter from './routes/userreview.routes.js';


app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/category", categoryRouter);
app.use("/api/v1/subcategory",subcategoryRouter);
app.use("/api/v1/collection",collectionRouter);
app.use("/api/v1/order",orderRouter);
app.use("/api/v1/userreview",userReviewRouter);


export {app};


