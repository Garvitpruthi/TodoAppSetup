const express = require('express');
const { PORT } = require('./config/server.config');
const homePingController = require('./controllers/home.controller');
const router = require('./routes');
const customRouter = require('./routes/customRouter')

const app = express();

app.use('/api', router); // localhost:3000/api/home
app.use('/custom', customRouter); // localhost:3000/custom/custom1

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