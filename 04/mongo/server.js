const express = require("express");

const app = express();
const db = require("./db/connect"); //开启服务器同时连接数据库

const userRouter = require("./router/userRouter");

app.use("/user", userRouter);

app.listen(2020, () => {
    console.log("服务器已开启，端口2020");
})