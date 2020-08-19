/*카운팅 라우터 */
const express = require('express');
const router = express.Router();
const mainCouter = require('../../lib/webLog/mainCounter');
const { 
        isJsonInputValid, 
        isJsonOutputValid, 
      } = require('../../middleware/validations');


router.get('/', (req,res) =>{
    res.json({
        isError: true,
        message: '카운팅할 JSON파일과 내보낼 JSON 파일의 이름을 지정하세요.',
    });
});


router.get('/:dataType/:inputName/:outputName',isJsonInputValid, isJsonOutputValid, (req, res) =>{
    mainCouter.mainCounter(req.params);
    res.json({
        isAccess: true,
        message: '카운팅 성공',
    });
});

module.exports = router;
