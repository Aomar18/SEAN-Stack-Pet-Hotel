const express = require('express');
const router = express.Router();
var pool = require('../modules/pool.js');


//OWNER POST
router.post('/', (req, res) => {
    const serverOwners = req.body;
    const query = `INSERT INTO "owners" 
                  ("first_name", "last_name")
                   VALUES ($1, $2,);`;
    pool.query(query, [
        serverOwners.first_name, 
        serverOwners.last_name, 
     ]).then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error with OWNER POST in router', error);
        res.sendStatus(500);
    });
});
    // end Owner POST


router.get('/', (req, res) => {
    const query = `SELECT * FROM "owners";`;
    pool.query(query).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error making OWNER GET in router', error);
        res.sendStatus(500);
    });
});


module.exports = router;