//主路由
const express = require("express");

//引入子路由
const usersRouter = require("./users");
const goodsRouter = require("./goods");

const Router = express.Router(); //创建路由

Router.use("/users", usersRouter);
Router.use("/goods", goodsRouter);

module.exports = Router;