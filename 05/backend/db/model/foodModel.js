//食品的数据模型
const mongoose = require("mongoose");

//new一个schema对象
let foodSchema = new mongoose.Schema({
    //第二个参数为是否必须
    name: {
        type: String,
        require: true
    },
    desc: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

// 创建数据模型
let foodModel = mongoose.model("food", foodSchema);

module.exports = foodModel;