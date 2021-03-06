const express = require('express');
const router = express.Router();
const drivers = require('../models/Drivers');
const uuid = require('uuid');

router.get('/createDriverRatingTable', (req, res) => {
    let query = 'CREATE TABLE ratings(id int NOT NULL AUTO_INCREMENT PRIMARY KEY, name varchar(255), car varchar(255), rating double)';
    db.query(query, (err, result) => {
        if(err) 
            throw err;
        console.log(result);
        res.send('Driver Rating Table Created');
    })
});

router.get('/drivers', (req, res) => {
    res.status(200).json(drivers);
})

router.post('/driver', (req, res) => {
    const newDriver = {
        id: uuid.v4(),
        name: req.body.name,
        car: req.body.car,
        currentX: req.body.currentX,
        currentY:req.body.currentY,
    }
    drivers.push(newDriver);
    console.log(`Driver ${newDriver.name} is looking for a Rider....`);
    res.status(201).json(newDriver);

})


module.exports = router;