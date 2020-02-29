// 引入第三方模块
const nodemailer = require("nodemailer");

//创建发送邮件的对象
let transporter = nodemailer.createTransport({
    // 以QQ邮箱为例
    host: "smtp.qq.com",
    port: 465,
    secure: true,
    auth: {
        user: '352186537@qq.com', // 发送方邮箱账号
        pass: 'oayiclnqblmucadi' // 邮箱的授权码
    }
});

// 邮件的内容
let content = {
    from: '"海思A215全体同仁" <352186537@qq.com>', // 发送方
    to: "1062151165@qq.com", // 接收方
    subject: "嗨佬，灿 !", // 主题
    html: '<h1>雷！！！</h1>' // html内容
}

//调用sendMail方法发送 
for (let i = 0; i < 20; i++) {
    transporter.sendMail(content, (err) => {
        console.log(err)
    });
}