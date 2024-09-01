const express = require('express');
const bodyParser = require('body-parser');
const { PORT } = require('./config/server.config');
const apirouter = require('./routes');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.text());

app.use('/api', apirouter); // localhost:3000/api/home

app.listen(PORT, ()=>{
    console.log(`started server at port ${PORT}`);
})

/**
 * 
 * how will u manage this kind of routes using express router ?
 * 
 * localhost:3000/api/v1/products/:id
 * localhost:3000/api/v1/categories/:id
 * localhost:3000/api/v2/products/:id
 * localhost:3000/api/v2/catrgories/:id
 * localhost:3000/api/v2/users/:id
 */