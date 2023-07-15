//require system
const express = require('express');
const mongoose = require('mongoose');
const {consola} = require('consola');
const cors = require('cors');
const serve = require('express-static');
const path = require('path');
const favicon = require('serve-favicon');
const morgan = require('morgan');
const {expressjwt} = require('express-jwt');
const crypto = require('crypto');
// consola.box(crypto.randomBytes(64).toString('hex'));//then put to .env file

require('dotenv').config();

//require self
const {errorHandle} = require('./middleware');
const {rootRouter,apiRouter,loginRouter,registRouter} = require('./routers');
const db = require('./dbs');

//variable
const port = 3000;
const app = express();

//db
mongoose.connect(db.address).then(()=>{
    consola.success('连接数据库成功！！');
}).catch((e)=>{
    consola.error('连接数据库出错');
    consola.error(e);
});

//middlewire
app.use(morgan('dev'));

// app.use(bodyParser.json());//不用再安装body-parser了，node4.16.0以后就集成了body-parser了
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());
app.use(favicon(path.join(__dirname, '/static', 'favicon.ico')))
app.use('/static',serve(__dirname + '/static'));

app.use(//expressjwt中间件已经做了jwt验证工作，所以jsonwebtoken的verify函数就不用我们自己调用了
    expressjwt({
        secret: process.env.SECRET_KEY,
        algorithms: ["HS256"],
    }).unless({ path: ['/',"/login","/regist"] })
);

app.use('/',rootRouter);
app.use('/api',apiRouter);
app.use('/login',loginRouter);
app.use('/regist',registRouter);

app.use(errorHandle);

//listen
app.listen(port,()=>{consola.log(`connect the http://localhost:${port}`);});