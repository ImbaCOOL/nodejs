const express = require("express");
const db = require("./backend/db/connect");
const bodyParser = require("body-parser");
const path = require("path");

let app = express();

//设置post
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// 静态资源路径
app.use("/public", express.static(path.join(__dirname, "./public")));

//路由
const foodRouter = require("./backend/router/foodRouter");

app.use("/food", foodRouter);

app.listen(2020, () => {
    console.log("服务器已启动，端口2020");
});