require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000
app.use(express.json());

const DbConnection=require("./config/db");
DbConnection();

const UserRouter = require("./routers/UserRouter");
const productRouter=require("./routers/productRouter");
const cartRouter=require('./routers/cartRouter');
app.use("/api", UserRouter);
app.use("/api",productRouter);
app.use("/api/cart",cartRouter)


app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})