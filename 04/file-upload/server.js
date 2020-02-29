const express = require('express');
const fs = require('fs');
const path = require('path');
var multer = require('multer');

const app = express()
const upload = multer({}) // 创建multer对象 

// 上传图片必须用post方式
app.post("/file", upload.single("img"), (req, res) => {
    // req.file 上传的文件信息默认是不存在的  只有被multer中间件处理过之后才有
    // buffer 上传的图片的数据
    let {
        buffer,
        originalname
    } = req.file;
    // 将buffer写入到文件内部
    // 防止文件被覆盖 保证文件名的唯一性
    let name = (new Date()).getTime();
    // 让后缀名 和源文件保持一致
    let ext = originalname.split('.')[1]

    fs.writeFile(path.join(__dirname, `./${name}.${ext}`), buffer, (err) => {
        if (err) {
            res.send({
                err: -1,
                msg: 'err'
            })
        } else {
            res.send({
                err: 0,
                msg: '0k'
            })
        }
    })
})

app.listen(2020, () => {
    console.log('服务器已启动，端口2020')
})