/* 시각화를 위한 라우터 */

const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', async(req, res, next) =>{

     res.render("amCharts");
});

module.exports = router;