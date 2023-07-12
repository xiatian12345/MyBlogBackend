//require system
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./dbs');

//require self
const {apiRouter,loginRouter} = require('./routers');

//variable
const port = 3000;
const app = express();

//db
mongoose.connect(db.address).then(()=>{
    console.error('连接数据库成功！！');
}).catch((e)=>{
    console.error('连接数据库出错！！');
});

//middlewire
app.use(bodyParser.json());
app.use('/api',apiRouter);
app.use('/login',loginRouter);

//listen
app.listen(port,()=>{console.log(`connect the port ${port}`);});