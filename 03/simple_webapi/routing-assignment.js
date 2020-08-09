//create application object
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

//call method object express
app.get('/',(req,res)=>{
    res.send('Hello from Server');
});

app.get('/overview',(req,res)=>{
    res.send('This is the OVERVIEW');
});

app.get('/product',(req,res)=>{
    res.send('This is the PRODUCT');
});

//test
app.listen(port,'127.0.0.1',()=>{
    console.log(`Listen to request on port ${port}`);
});