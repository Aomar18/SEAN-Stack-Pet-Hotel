const express = require('express');
const router = express.Router();
var pool = require('../modules/pool.js');

router.post('/', (req, res) => {
    const ownerToAdd = req.body;
    const query = `INSERT INTO "owners" 
                  ("first_name", "last_name")
                   VALUES ($1, $2,);`;
    pool.query(query, [
        ownerToAdd.first_name, 
        ownerToAdd.last_name, 
     ]).then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error with POST', error);
        res.sendStatus(500);
    });// end POST
});






module.exports = router;
