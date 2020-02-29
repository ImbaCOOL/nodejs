const express = require("express");
const {
    insertFood,
    deleteFood,
    updateFood,
    findAllFood,
    findFoodByPage,
    findFoodByDesc,
    findFoodByKeyW
} = require("../controller/foodController");

let router = express.Router();

// 添加食品
/**
 * @api {post} /food/add 添加食品
 * @apiName add
 * @apiGroup food
 *
 * @apiParam {String} name 菜名
 * @apiParam {String} desc 描述
 * @apiParam {Number} price 价格
 *
 * @apiSuccess {Number} err 状态码
 * @apiSuccess {String} msg 消息提示
 */
router.post("/add", async (req, res) => {
    let {
        name,
        desc,
        price
    } = req.body;

    try {
        await insertFood({
            name,
            desc,
            price
        });
        res.send({
            err: 0,
            msg: "ok"
        });
    } catch (err) {
        res.send({
            err: -1,
            msg: "err"
        });
    };
});

// 删除食品
/**
 * @api {delete} /food/del 删除食品
 * @apiName del
 * @apiGroup food
 *
 * @apiParam {Object} _id id
 *
 * @apiSuccess {Number} err 状态码
 * @apiSuccess {String} msg 消息提示
 */
router.delete("/del", async (req, res) => {
    let {
        _id
    } = req.body;

    try {
        await deleteFood({
            _id
        });
        res.send({
            err: 0,
            msg: "ok"
        });
    } catch (err) {
        res.send({
            err: -1,
            msg: "err"
        });
    };
})

// 修改食品
/**
 * @api {put} /food/update 修改食品
 * @apiName update
 * @apiGroup food
 *
 * @apiParam {Object} _id id
 * @apiParam {String} name 菜名
 * @apiParam {String} desc 描述
 * @apiParam {Number} price 价格
 *
 * @apiSuccess {Number} err 状态码
 * @apiSuccess {String} msg 消息提示
 */
router.put("/update", async (req, res) => {
    let {
        _id,
        name,
        desc,
        price
    } = req.body;

    try {
        await updateFood({
            _id
        }, {
            name,
            desc,
            price
        });
        res.send({
            err: 0,
            msg: "ok"
        });
    } catch (err) {
        res.send({
            err: -1,
            msg: "err"
        });
    };
})

// 查询全部食品
/**
 * @api {get} /food/findAll 查询全部食品
 * @apiName findAll
 * @apiGroup food
 *
 * @apiSuccess {Number} err 状态码
 * @apiSuccess {String} msg 消息提示
 * @apiSuccess {Array} list 数据
 */
router.get("/findAll", async (req, res) => {
    try {
        let data = await findAllFood();
        res.send({
            err: 0,
            msg: "ok",
            list: data
        });
    } catch (err) {
        res.send({
            err: -1,
            msg: "err",
            list: []
        });
    };
})

// 分页查询
/**
 * @api {get} /food/findByPage 分页查询
 * @apiName findByPage
 * @apiGroup food
 *
 * @apiParam {Number} page 页码
 * @apiParam {Number} pageSize 一页数据的条数
 *
 * @apiSuccess {Number} err 状态码
 * @apiSuccess {String} msg 消息提示
 * @apiSuccess {Number} count 数据条数
 * @apiSuccess {Array} list 数据
 */
router.get("/findByPage", async (req, res) => {
    let {
        page,
        pageSize
    } = req.query;

    try {
        let data = await findFoodByPage(page, pageSize);
        res.send({
            err: 0,
            msg: "ok",
            count: data.count,
            list: data.list
        });
    } catch (err) {
        res.send({
            err: -1,
            msg: "err",
            count: 0,
            list: []
        });
    };
})

// 分类查询(分页)
/**
 * @api {get} /food/findByDesc 分类查询
 * @apiName findByDesc
 * @apiGroup food
 *
 * @apiParam {String} desc 描述
 *
 * @apiSuccess {Number} err 状态码
 * @apiSuccess {String} msg 消息提示
 * @apiSuccess {Array} list 数据
 */
router.get("/findByDesc", async (req, res) => {
    let {
        desc
    } = req.query;

    try {
        let data = await findFoodByDesc({
            desc
        });
        res.send({
            err: 0,
            msg: "ok",
            list: data
        });
    } catch (err) {
        res.send({
            err: -1,
            msg: "err",
            list: []
        });
    };
})

// 关键字查询(分页)
/**
 * @api {get} /food/findByKeyW 关键字查询
 * @apiName findByKeyW
 * @apiGroup food
 *
 * @apiParam {String} keyword 关键字
 *
 * @apiSuccess {Number} err 状态码
 * @apiSuccess {String} msg 消息提示
 * @apiSuccess {Array} list 数据
 */
router.get("/findByKeyW", async (req, res) => {
    let {
        keyword
    } = req.query;

    try {
        let data = await findFoodByKeyW(keyword);
        res.send({
            err: 0,
            msg: "ok",
            list: data
        });
    } catch (err) {
        res.send({
            err: -1,
            msg: "err",
            list: []
        });
    };
})

module.exports = router;