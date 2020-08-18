/* 로그 파일을 \n(개행문자를) 기준으로 split */
/*어느 로그든 공백을 기준으로 잘라야 하기 때문에 공통 라이브러리로 분류*/
const fs = require('fs');
exports.splitLog = (fileName) =>{
    try{
    const readLog = fs.readFileSync(fileName,'utf-8');    
    return readLog.split('\n'); //return 값은 문자열 배열
    }catch(err){
        console.log(err);
        return;
    }
};
    