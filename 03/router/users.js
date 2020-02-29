//用户子路由
const express = require("express");
const bodyParser = require('body-parser');

const Router = express.Router();

Router.use(bodyParser.urlencoded({
    extended: false
}));
Router.use(bodyParser.json());

Router.get("/login", (req, res) => {
    let {
        username,
        password
    } = req.query;

    res.send({
        username,
        password
    });
})

module.exports = Router;