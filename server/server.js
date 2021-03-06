const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 9000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));
app.use(bodyParser.json());

const OwnerRouter = require('./routes/owner-router.js');
const PetRouter = require('./routes/pet-router.js');

// ROUTES
app.use('/owner', OwnerRouter);
app.use('/pet', PetRouter);


app.listen(PORT, () => {
    console.log('surfin the mighty serverr' , PORT);
});