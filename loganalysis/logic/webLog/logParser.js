/* Weblog를 parsing해서 객체를 생성 */
const webRegex = require("../../regex/webLogRegex");
const splitMethod = require('./parsing/splitMethod');
const pushObject = require('./parsing/pushObject');
const methodParser = require('./parsing/methodParser');

exports.webLogParser = (logArray) =>{  //split된 로그 배열을 입력 받음; 
    const webLogObject = [];
    if(logArray){
        const regex = webRegex.regex; 
        logArray.forEach(async (element) => {
            /* regex 변수들 : 정규 표현식에 대해 파싱된 값들  */
            const regexIp = element.match(regex.webIp);
            const regexMethod = element.match(regex.webMethod); 
            const regexDate = element.match(regex.webDate);
            const regexRefer = element.match(regex.webRefer);
            if(regexMethod){ 
                const realMethod = await methodParser.methodPaser(regexMethod); // 메소드 부분만 따로 파싱한다.
                const parsedData = pushObject.pushObject(regexIp, realMethod, regexDate, regexRefer); 
                if(parsedData) webLogObject.push(parsedData);
            }
        });
    }
    return webLogObject; //파싱된 객체 배열을 반환해줌
};