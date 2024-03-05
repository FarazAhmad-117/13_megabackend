const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
const databaseUrl = process.env.DATABASE_URL;


app.get('/',(req,res)=>{
    res.send("CH Dropshipping");
})

app.listen(port,()=>{
    console.log(databaseUrl);
    console.log(`Server running on port http://localhost:${port}`);
})

