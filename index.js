const express = require('express');


const port = 3000;


const app = express();


app.get('/',(req,res)=>{res.status(200).send('HELLO WORLD!')})
app.listen(port,()=>{console.log(`connect the port ${port}`);});