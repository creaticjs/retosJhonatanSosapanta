const express = require('express');
const bodyParser = require('body-parser');
// const dbusers = require('./db/db');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const userRoutes = require('./routes/users')(app)
//const empresasRoutes = require('./routes/users')(app)

app.listen(3000, () => {
    console.log(`El servidor esta corriendo en el puerto 3000`);
});
