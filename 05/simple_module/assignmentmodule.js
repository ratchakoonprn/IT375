const age = require('./agemodule');
const student = require('./studentmodule');
const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());

app.get('/api/stuinfo/:id/:fname/:lname/:bdate',(req,res)=>{
    const id = req.params.id;
    const fname = req.params.fname;
    const lname = req.params.lname;
    const birthdate = req.params.bdate;
    // format birthdate yyyy/mm/dd
    const byear = birthdate.slice(0,4);
    const bmonth = birthdate.slice(4,6);
    const bday = birthdate.slice(6,8);
    const bdate = `${byear}/${bmonth}/${bday}`;

    const newStudent = new student(id,fname,lname,bdate);
    const stuinfo = newStudent.getStudent();
    const stuage = age.computeAge(bdate);

    res.send(
        `Student Information:
        ${stuinfo}
        ${stuage}
        `);
});

app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening to request on port ${port}`);
});