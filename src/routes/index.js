// Api Router

const express = require('express');
const v1router = require('./v1/index');
const v2router = require('./v2/index');

const router = express.Router(); // express router object

router.use('/v1', v1router);  // /v1/ping
router.use('/v2', v2router); // /v2/ping

module.exports = router