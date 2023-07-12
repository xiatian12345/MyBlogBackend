const express = require('express');

const {apiRouter} = require('./routers');

const port = 3000;


const app = express();


app.use('/api',apiRouter);
app.listen(port,()=>{console.log(`connect the port ${port}`);});