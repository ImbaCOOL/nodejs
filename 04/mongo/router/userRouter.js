const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({
    extended: false
}));
router.use(bodyParser.json());

const userModel = require("../db/Model/userModel"); //连接user集合

//注册
router.post("/reg", (req, res) => {
    let {
        username,
        password
    } = req.body;

    userModel.insertMany({
            username,
            password
        })
        .then(data => res.send({
            err: 0,
            msg: "ok"
        }))
        .catch(err => res.send({
            err: -1,
            msg: "error"
        }));
})

//登录
router.get("/login", (req, res) => {
    let {
        username,
        password
    } = req.query;

    userModel.find({
            username,
            password
        })
        .then(data => res.send({
            err: 0,
            msg: "ok"
        }))
        .catch(err => res.send({
            err: -1,
            msg: "error"
        }));
})

//修改
router.put("/update", (req, res) => {
    let {
        username,
        password
    } = req.body;

    userModel.updateMany({
            username
        }, {
            $set: {
                password
            }
        })
        .then(data => res.send({
            err: 0,
            msg: "ok"
        }))
        .catch(err => res.send({
            err: -1,
            msg: "error"
        }));
})

//删除
router.delete("/del", (req, res) => {
    let {
        username,
        password
    } = req.body;

    userModel.deleteMany({
            username,
            password
        })
        .then(data => res.send({
            err: 0,
            msg: "ok"
        }))
        .catch(err => res.send({
            err: -1,
            msg: "error"
        }));
})

module.exports = router;