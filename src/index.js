const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = process.env.PORT; // PORT for the server

app.listen(PORT, ()=>{
    console.log(`started server at port ${PORT}`);
})