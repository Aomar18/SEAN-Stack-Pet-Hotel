const express = require('express');
const router = express.Router();
var pool = require('../modules/pool.js');


router.get('/', (req, res) => {
    const query = `SELECT * FROM "pets";`;
    pool.query(query).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error making PET GET in router', error);
        res.sendStatus(500);
    });
});


module.exports = router;