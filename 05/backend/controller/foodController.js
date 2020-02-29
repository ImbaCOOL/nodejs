const foodModel = require("../db/model/foodModel");

// 添加食品
let insertFood = obj => foodModel.insertMany(obj);

// 删除食品
let deleteFood = _id => foodModel.deleteOne(_id);

// 修改食品
let updateFood = (_id, obj) => foodModel.updateOne(_id, obj);

// 查询全部食品
let findAllFood = () => foodModel.find();

// 分页查询
let findFoodByPage = async (page, pageSize) => {
    // 按照一定条件查询
    let data = await foodModel.find();

    // 查询到的数据的数量
    let count = data.length;

    // 按照一定条件分页
    let list = await foodModel.find().skip(Number((page - 1) * pageSize)).limit(Number(pageSize));

    return {
        count,
        list
    }
};

// 分类查询
let findFoodByDesc = desc => foodModel.find(desc);

// 关键字查询，通过正则表达式匹配关键字
let findFoodByKeyW = keyword => {
    let regex = new RegExp(keyword);
    let data = foodModel.find({
        $or: [{
            name: {
                $regex: regex
            }
        }, {
            desc: {
                $regex: regex
            }
        }]
    });
    return data;
}

module.exports = {
    insertFood,
    deleteFood,
    updateFood,
    findAllFood,
    findFoodByPage,
    findFoodByDesc,
    findFoodByKeyW
};