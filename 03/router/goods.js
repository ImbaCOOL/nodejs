//商品子路由
const express = require("express");
const bodyParser = require('body-parser');

const Router = express.Router();

Router.use(bodyParser.urlencoded({
    extended: false
}));
Router.use(bodyParser.json());

Router.post("/add", (req, res) => {
    let {
        id,
        name
    } = req.body;

    res.send({
        id,
        name
    });
})

module.exports = Router;