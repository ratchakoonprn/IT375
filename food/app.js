const express = require('express');

const restaurantsRouter = require('./routes/restaurants');
const indexRouter = require('./routes/index');
const path = require('path');

const logger = require('./middleware/logger');

const app = express();

const port = process.env.PORT || 8000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(express.json()); // express.json() เป็น built-in middleware ที่ใช้เพื่ออ่านข้อมูลในรูปแบบของ JSON ได้
app.use(express.urlencoded({extended:false})); //มีการ pass property คือ extended: false ซึ่งทำให้สามารถอ่านข้อมูล req.body ได้
app.use(express.static(path.join(__dirname, 'public')));

// Custom Middleware
app.use(logger);

// Routes
app.use('/api/restaurants',restaurantsRouter);
app.use('/',indexRouter);

app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening to request on port ${port}`);
});
