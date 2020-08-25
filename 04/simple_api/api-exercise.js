const express = require('express');
const app = express();

const port = process.env.PORT || 8000;

app.use(express.json());
const cars = [
    {id:'C001', 'brand':'Toyota', 'model':'Camry', 'price':'1,450,000'},
    {id:'C002', 'brand':'Toyota', 'model': 'Vios', 'price':'650,000'},
    {id:'C003', 'brand':'Honda', 'model':'CR-V', 'price':'1,500,000'},
    {id:'C004', 'brand':'Honda', 'model':'Civic', 'price':'850,000'},
];

app.get('/api/car',(req,res)=>{
    res.send(cars);
});

app.post('/api/newcar',(req,res)=>{
    const newCar ={
        id: req.body.id,
        'brand': req.body.brand,
        'model': req.body.model,
        'price': req.body.price
    };
    cars.push(newCar);
    res.send(cars);
});

app.put('/api/updatecar/:id',(req,res)=>{
    const carId = cars.find(element => element.id === req.body.id);
    if(carId){
        carId.brand = req.body.brand;
        carId.model = req.body.model;
        carId.price = req.body.price;
    }else{
        res.status(404).send('ไม่พบรหัสรถยนต์นี้');
    }
    res.send(cars);
});

app.delete('/api/deletecar/:id',(req,res)=>{
    const carId = cars.find(element => element.id === req.params.id);
    if(carId){
        const index = cars.indexOf(carId);
        cars.splice(index,1);
    }else{
        res.status(404).send('ไม่พบรหัสรถยนต์นี้');
    }
    res.send(cars);
});
app.listen(port,'127.0.0.1',()=>{
    console.log(`Listening to request on port ${port}`);
});