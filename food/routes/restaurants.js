const express = require('express');
const router = express.Router();

const restaurants = require('../data');

router.get('/',(req,res)=>{
    res.json(restaurants);
});

router.get('/:id',(req,res)=>{
    const restaurantId = restaurants.find(element => element.id === parseInt(req.params.id));
    if (restaurantId){
        res.json(restaurantId);
    }else{
        res.send('WRONG ID CANNOT GET THE DATA');
    }
});

router.post('/',(req,res)=>{
    let currentRestaurantId = restaurants.slice(-1)[0].id;
    currentRestaurantId += 1;
    const newRestaurant = {
        id: currentRestaurantId,
        ...req.body
    };
    restaurants.push(newRestaurant);
    res.json(newRestaurant);
});

router.put('/:id',(req,res)=>{
    const restaurantId = req.params.id;
    const restaurantIndex = restaurants.findIndex(element => element.id === parseInt(restaurantId));
    const updatedRestaurant = {
        id:restaurantId,
        ...req.body
    };
    restaurants[restaurantIndex] = updatedRestaurant;
    res.json(updatedRestaurant);
});

router.delete('/:id',(req,res)=>{
    const restaurantId = req.params.id;
    const restaurantIndex = restaurants.findIndex(element => element.id === parseInt(restaurantId));
    if (restaurantIndex >= 0){
        restaurants.splice(restaurantIndex,1);
        res.json(restaurants);
    }else{
        res.status(404).send('WRONG ID CANNOT DELETE THE DATA');
    }
});

module.exports = router;