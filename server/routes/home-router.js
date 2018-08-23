const express = require('express');
const router = express.Router();
let pool = require('../modules/pool.js');

//OWNER POST
router.post('/', (req, res) => {
    const owners = req.body;
    const query = `INSERT INTO "owners" 
                  ("first_name", "last_name")
                   VALUES ($1, $2,);`;
    pool.query(query, [
        owners.first_name, 
        owners.last_name, 
     ]).then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error with OWNER POST in router', error);
        res.sendStatus(500);
    });
});
    // end Owner POST


//PET POST
router.post('/', (req, res) => {
    const pets = req.body;
    const query = `INSERT INTO "pets" 
                  ("name", "breed" , "color" , "checkedin" , "lastcheckin")
                   VALUES ($1, $2, $3, $4, $5);`;
    pool.query(query, [
        pets.name, 
        pets.breed,
        pets.color,
        pets.checkedin,
        pets.lastcheckin
     ]).then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error with PET POST in router', error);
        res.sendStatus(500);
    });// end PET POST
});






module.exports = router;
