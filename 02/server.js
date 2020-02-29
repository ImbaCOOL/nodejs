const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// post设置
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.get("/login", (req, res) => {
    // 1.接收数据
    let {
        username,
        password
    } = req.query;

    // 2.处理数据
    username = `username：${username}`;
    password = `password：${password}`;

    // 3.返回数据
    res.send({
        username,
        password
    });
})

app.post("/register", (req, res) => {
    let {
        username,
        password
    } = req.body;

    username = `username：${username}`;
    password = `password：${password}`;

    res.send({
        username,
        password
    });
})

app.listen(8888, () => {
    console.log("服务器开启成功，端口8888");
})