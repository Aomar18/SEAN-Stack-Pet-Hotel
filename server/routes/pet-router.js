const express = require('express');
const router = express.Router();
var pool = require('../modules/pool.js');


//PET POST
router.post('/', (req, res) => {
    const serverPets = req.body;
    console.log()
    const query = `INSERT INTO "pets" 
                  ("name", "breed" , "color" , "checkedin" , "lastcheckin")
                   VALUES ($1, $2, $3, $4, $5);`;
    pool.query(query, [
        serverPets.name, 
        serverPets.breed,
        serverPets.color,
        serverPets.checkedin,
        serverPets.lastcheckin
     ]).then(() => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Error with PET POST in router', error);
        res.sendStatus(500);
    });// end PET POST

});



router.get('/', (req, res) => {
    const query = `SELECT * FROM "pets";`;
    pool.query(query).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log('Error making PET GET in router', error);
        res.sendStatus(500);
    });
});

router.delete('/:petid', function(req,res){
        const deleteId = req.params.petid;
        console.log(req.params.petid);
        const query = `DELETE FROM "pets" WHERE "id" = $1;`;
        pool.query(query,[deleteId]).then((results)=>{
            console.log(results);
            res.sendStatus(200);
        }).catch((error)=>{
            console.log('Error in Delete route',error);
            res.sendStatus(500);
        });
    });

module.exports = router;