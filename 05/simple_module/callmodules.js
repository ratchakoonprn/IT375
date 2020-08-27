const ownmodule = require('./ownmodules');
const myuser = require('./mymodule');
const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());

app.get('/api/date',(req,res)=>{
    res.write("The date and time is currently: " + ownmodule.myDateTime());
    res.write("\nCreated by: " + ownmodule.myName());
    res.end();
    //res.send(`The date and time is currently: ${cm.myDateTime()} \n Created by:  ${cm.myName()}`);
});

app.get('/api/myinfo/:fname/:age/:email',(req,res)=>{
    const fname = req.params.fname;
    const age = req.params.age;
    const email = req.params.email;
    const newuser = new myuser(fname, age, email);
    res.send(newuser.getUserStats());
});

app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening to request on port ${port}`);
});
