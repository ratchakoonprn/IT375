var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/hello', (req,res,next)=>{
  res.render('hello');
});

router.get('/page1', (req,res,next)=>{
  res.redirect('page2');
});

router.get('/page2', (req,res,next)=>{
  res.send('Hello this is page 2');
});

router.get('/contact', (req,res,next)=>{
  res.render('contact');
});

router.get('/about', (req,res,next)=>{
  res.render('about');
});

router.get('/login', (req,res,next)=>{
  res.render('login');
});

router.post('/login', (req,res,next)=>{
  var u = req.body.username;
  var p = req.body.password;
  if(u == 'admin' && p =='1234' ){
    res.send('Login Success');
  } else{
    res.send('User Invalid!!');
  }
});

router.get('/json', (req,res,next)=>{
  var ratchakoon = {
    name: 'Ratchakoon',
    tel: '083-962-2259',
    age: 40,
    gender: 'female'
  };
  var suchada = {
    name: 'Suchada',
    tel: '084-941-2851',
    age: 39,
    gender: 'female'
  };
  var arr = [ratchakoon, suchada];
  res.send(arr);
});

router.get('/fetch', (req,res,next)=>{
  fetch('https://github.com')
  .then(res => res.text())
  .then(body => res.send(body));
});

router.get('/upload', (req,res,next)=>{
  res.render('upload');
});

router.post('/upload', (req,res,next)=>{
  if(!req.files || Object.keys(req.files).length === 0){
    return res.status(400).send('No files were uploads.');
  }

  let myFile = req.files.myFile;

  myFile.mv('./public/images' + myFile.name,(err)=>{
    if(err){
      return res.status(500).send(err.message);
    }else{
      res.send('File uploaded!');
    }
  });
});

module.exports = router;
