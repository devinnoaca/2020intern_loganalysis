const express = require('express');
const router  = express.Router();


router.use('/parsing', require('./parsing'));
router.use('/counting',require('./counting'));
// router.use('/visualization',require('./visualization'));
module.exports = router;