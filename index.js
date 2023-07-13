//require system
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const {consola} = require('consola');
const cors = require('cors');
const serve = require('express-static');
const path = require('path');
const favicon = require('serve-favicon');

//require self
const {errorHandle} = require('./middleware');
const {rootRouter,apiRouter,loginRouter} = require('./routers');
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
app.use(bodyParser.json());

app.use(cors());
app.use(favicon(path.join(__dirname, '/static', 'favicon.ico')))
app.use('/static',serve(__dirname + '/static'));

app.use('/',rootRouter);
app.use('/api',apiRouter);
app.use('/login',loginRouter);

app.use(errorHandle);

//listen
app.listen(port,()=>{consola.log(`connect the http://localhost:${port}`);});