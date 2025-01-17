const express = require('express');
const homePingController = require('../../controllers/home.controller');
const todoRouter = require('./todo.routes');


const router = express.Router();

router.use('/todos', todoRouter);

router.get('/ping', homePingController)  // /ping


module.exports = router;