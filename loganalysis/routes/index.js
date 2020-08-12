const express = require('express');
const router = express.Router();

router.use('/webLogs', require('./webLogs'));
// router.use('/dbLogs', require('/dbLogs'));
// router.use('/sysLogs', require('sysLogs'))


module.exports = router;
