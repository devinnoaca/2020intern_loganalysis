/* Weblog를 parsing해서 객체를 생성 */
const webRegex = require("../../regex/webLogRegex");
const splitMethod = require('./parsing/splitMethod');
const pushObject = require('./parsing/pushObject');
const methodParser = require('./parsing/methodParser');

exports.webLogParser = (logArray) =>{  //split된 로그 배열을 입력 받음; 
    const webLogObject = [];
    const regex = webRegex.regex; 
    logArray.forEach( (element) => {
        const regexIp =  element.match(regex.webIp);
        const regexMethod =  element.match(regex.webMethod);
        const regexDate =  element.match(regex.webDate);
        const regexRefer =  element.match(regex.webRefer);
        if(regexMethod){ 
            const realMethod =  methodParser.methodPaser(regexMethod);
            const parsedData =  pushObject.pushObject(regexIp, realMethod, regexDate, regexRefer); 
            if(parsedData) webLogObject.push(parsedData);
        }
        
    });
    return webLogObject;
};