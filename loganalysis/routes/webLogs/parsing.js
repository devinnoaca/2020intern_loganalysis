/* 파싱 라우터 */
const express = require('express');
const router = express.Router();
const logParer = require('../../logic/webLog/logParser.js');
const splitLog = require('../../logic/splitLog');
const objectToJson = require('../../logic/objectToJson');

router.get('/:inputName/:outputName', async(req, res, next) =>{
    const inputName =  await 'logs/webLogs/' + req.params.inputName;
    const outputName = await 'jsonLogs/webLogs/' + req.params.outputName;
    const splitData = await splitLog.splitLog(inputName); //로그 split
    const logData =  await logParer.webLogParser(splitData); // log parsing
    try{
        objectToJson.objectToJson(outputName, logData);
        console.log("파싱 성공");
        /*
        상태 코드 넣어야함
        */
        res.status(200).send(JSON.parse(logData));
    }catch(err){
        console.log(err);
    }
});


module.exports = router;
