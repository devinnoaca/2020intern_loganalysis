const express = require('express');
const router  = express.Router();


router.use('/parsing', require('./parsing'));
router.use('/counting',require('./counting'));
<<<<<<< HEAD
router.use('/visual',require('./visualization'));
module.exports = router;
=======
// router.use('/visualization',require('./visualization'));
module.exports = router;
>>>>>>> 88bac9d98a18569e82fc7e3765d6e2636e12b90e
