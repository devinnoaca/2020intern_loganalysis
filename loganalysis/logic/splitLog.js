/* 로그 파일을 \n(개행문자를) 기준으로 split */
const fs = require('fs');
// example fileName = './logs/webLogs/WebLog_20200713.log'
exports.splitLog = (fileName) =>{
    const readLog = fs.readFileSync(fileName,'utf-8');  
    return readLog.split('\n'); //return 값은 문자열 배열
};
