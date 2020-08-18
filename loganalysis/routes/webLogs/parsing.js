/* 파싱 라우터 */
const express = require('express');
const router = express.Router();
const logParer = require('../../logic/webLog/logParser.js'); 
const splitLog = require('../../logic/splitLog');
const objectToJson = require('../../logic/objectToJson');

// /webLogs/parsing/{inputName}/{outputName}

router.get('/:inputName/:outputName', async(req, res, next) =>{
    const inputName = 'logs/webLogs/' + req.params.inputName;
    const outputName = 'jsonLogs/webLogs/' + req.params.outputName;
    if(inputName && outputName){
        const splitData = await splitLog.splitLog(inputName); //로그 split
        const logData =  await logParer.webLogParser(splitData); // log parsing
        objectToJson.objectToJson(outputName, logData);  //객체를 JSON 파일로 바꿈
        res.json('파싱 성공');
    }
});


module.exports = router;
