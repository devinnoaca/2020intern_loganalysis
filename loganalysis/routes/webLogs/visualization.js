/* 시각화를 위한 라우터 */

const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', async(req, res, next) =>{
     res.render('visual');
});

router.get('/:dataType', async(req, res, next) =>{
     const dataType = req.params.dataType;
     console.log(dataType);
     if(dataType==='ip')  res.render('ipChart');
     if(dataType==='url')  res.render('urlchart');
     if(dataType==='refer')  res.render("referChart");
});

module.exports = router;