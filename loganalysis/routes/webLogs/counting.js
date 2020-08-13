/*카운팅 라우터 */
const express = require('express');
const router = express.Router();
const countKeyword = require('../../logic/webLog/countKeyword');
const getDate = require('../../logic/getDate');
const visualKeyword = require('../../logic/webLog/visualKeyword');
// /webLogs/conting/{dataType}/{inputName}/{outputName}

router.get('/:dataType/:inputName/:outputName', async (req, res, next) =>{
    let date = new Date();
    date =  await getDate.getDate(date);
    const dataType =  req.params.dataType;  
    const inputName = 'jsonLogs/webLogs/' + req.params.inputName;
    const outputName = 'jsonLogs/webLogs/countedLogs/' + dataType + '.json';
     // 선택한 데이터를 counting
    if(inputName && outputName && dataType) {
        await countKeyword.countKeyword(dataType, inputName, outputName);
        visualKeyword.visualKeyword(outputName,'jsonLogs/webLogs/visualLogs/visual-' + dataType +'.json');
    } 
    res.json('카운팅 성공');
});


module.exports = router;
