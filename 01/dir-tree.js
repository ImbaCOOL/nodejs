// 引入内置模块
const fs = require("fs");
const path = require("path");

function dirTree(tagDir, deep) {
    let tree = new Array(deep).join("┃  "); //设置深度
    let data = fs.readdirSync(tagDir); //读取文件夹
    let dirs = [];
    let files = [];

    data.forEach(item => {
        let filePath = path.join(tagDir, item); //获取单个文件的路径
        let state = fs.statSync(filePath); //获取文件的信息

        // 判断是文件还是文件夹
        if (state.isFile()) {
            files.push(item);
        } else {
            dirs.push(item);
        }
    });

    dirs.forEach(item => {
        console.log(`${tree}┣━${item}`); //打印文件夹

        // 递归
        let nextTagDir = path.join(tagDir, item);
        let nextDeep = deep + 1;
        dirTree(nextTagDir, nextDeep);
    });

    // 打印文件
    files.forEach(item => {
        let count = files.length - 1;

        if (count--) {
            console.log(`${tree}┣━${item}`);
        } else {
            console.log(`${tree}┗━${item}`);
        }
    });
}

dirTree(__dirname, 1);