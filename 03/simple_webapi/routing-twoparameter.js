const express = require('express');
const { NotExtended } = require('http-errors');
const app = express();
const port = process.env.PORT || 8000;

// IT students
const itStudents =[
    {id:61, name: 'Suchada'},
    {id:62, name: 'Narawit'}
];

// CE students
const ceStudents =[
    {id:71, name: 'Chonticha'},
    {id:72, name: 'Kiattiphom'}
];

// major
const allMajors = { 'it': itStudents, 'ce':ceStudents}

app.get('/api/:id/:major',(req,res,next)=>{
    const id = req.params.id;
    const major = req.params.major.toLowerCase();
    if(allMajors[major]){
        if(major == 'it'){
            let stuData = itStudents.find(obj => obj.id ===parseInt(id));
            if(typeof stuData === 'undefined'){
                res.send('This student is not major in IT');
            }else{
                res.send(stuData);
            }
        }else{
            //major ce
            let stuData = ceStudents.find(obj => obj.id ===parseInt(id));
            if(typeof stuData === 'undefined'){
                res.send('This student is not major in CE');
            }else{
                res.send(stuData);
            }
        }

    }else{
        res.send('Major not found!!!');
    }
});

app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening to request on port ${port}`);
});