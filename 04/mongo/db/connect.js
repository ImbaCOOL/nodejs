// 连接mongo数据库 默认端口27017
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/01', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection; //创建数据库的连接对象

db.on("error", () => console.log("数据库连接失败")); //监听错误
db.once("open", () => console.log("数据库已连接")); //监听成功