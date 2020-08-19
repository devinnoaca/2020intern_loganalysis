const express = require('express');
const router = express.Router();
const mainParser = require('../../lib/webLog/mainParser');
const { isLogInputValid, 
        isJsonOutputValid, 
        isFileValid,
      } = require('../../middleware/validations');

router.get('/', (req,res) =>{
    res.json({
        isError: true,
        message: '파싱할 LOG파일과 내보낼 JSON 파일의 이름을 지정하세요.',
    });
});


router.get('/:inputName/:outputName',isLogInputValid, isJsonOutputValid , isFileValid, (req, res) =>{
    mainParser.mainParser(req.params);
    res.json({
        isAccess: true,
        message: '파싱 성공',
    });
});


module.exports = router;
