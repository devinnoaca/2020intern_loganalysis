/*카운팅 라우터 */
const express = require('express');
const router = express.Router();
const countKeyword = require('../../logic/webLog/countKeyword');
const getDate = require('../../logic/getDate');
router.get('/:dataType/:inputName/:outputName', async (req, res, next) =>{
    let date = new Date();
    date = await getDate.getDate(date);
    const inputName =  await 'jsonLogs/webLogs/' + req.params.inputName + '.json' ;
    const outputName = await 'jsonLogs/webLogs/countedLogs/' + req.params.outputName +'-'+ date +'.json';
    const dataType =  await req.params.dataType;  

     // 선택한 데이터를 counting
    if(inputName && outputName && dataType)  countKeyword.countKeyword(dataType, inputName, outputName);
    
});


module.exports = router;
