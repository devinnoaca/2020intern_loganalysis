const express = require('express');
const router  = express.Router();


router.use('/parsing', require('./parsing'));
router.use('/counting',require('./counting'));
router.use('/visual',require('./visualization'));
module.exports = router;
