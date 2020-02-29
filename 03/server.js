const express = require("express");
const allRouter = require("./router/index"); //引入主路由

const app = express();

app.use(express.static("./")); //以当前目录为静态资源服务器
app.use(allRouter);

app.listen(2020, () => {
    console.log("服务器开启成功，端口2020");
});