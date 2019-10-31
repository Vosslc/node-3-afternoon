require('dotenv').config()
const express = require('express');
const massive = require('massive');
const products_controller = require('./products_controller')

const app = express();
const { SERVER_PORT, CONNECTION_STRING } = process.env;

//Massive is a data mapper for Node.js that goes all in on PostgreSQL and embraces the power and flexibility of SQL ---> https://massivejs.org/ <--- use for RESOURCE
massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    app.listen(SERVER_PORT, () => {
      console.log(`Brewers listening for ${SERVER_PORT} BBLs to the fall!`)
    })
})
.catch(err => console.log(err));

app.use(express.json()); //<----- this Returns middleware that parses both json and urlencoded. The options are passed to both middleware.

app.post('/api/products', products_controller.create);
app.get('/api/products', products_controller.getAll);
app.get('/api/products/:id', products_controller.getOne);
app.put('/api/products/:id', products_controller.update);
app.delete('/api/products:id', products_controller.delete);

