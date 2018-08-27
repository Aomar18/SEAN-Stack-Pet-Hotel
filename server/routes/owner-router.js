const express = require('express');
const router = express.Router();
var pool = require('../modules/pool.js');


//OWNER POST
router.post('/', (req, res) => {
    const serverOwners = req.body;
    const query = `INSERT INTO "owners" 
                  ("first_name", "last_name")
                   VALUES ($1, $2);`;
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
    const query = `SELECT "owners"."id" , "owners"."first_name" , "owners"."last_name"  ,COUNT ("pets"."owner_id") FROM "owners" LEFT JOIN "pets" ON "pets"."owner_id" = "owners"."id" GROUP BY "owners"."id" , "owners"."first_name" ORDER BY count ASC; `;
    pool.query(query).then((results) => {
        console.log(results.rows);
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error making OWNER GET in router', error);
        res.sendStatus(500);
    });
});

router.delete('/:ownerid', function(req,res){
    const deleteId = req.params.ownerid;
    console.log(req.params);
    const query = `DELETE FROM "owners" WHERE "id" = $1;`;
    pool.query(query,[deleteId]).then((results)=>{
        console.log(results);
        res.sendStatus(200);
    }).catch((error)=>{
        console.log('Error in Delete route',error);
        res.sendStatus(500);
    });
});

module.exports = router;