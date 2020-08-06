/* Weblog를 parsing해서 객체를 생성 */
const webRegex = require("../../regex/webLogRegex");

exports.webLogParser = (logArray) =>{  //split된 로그 배열을 입력 받음; 
    const webLogObject = [];
    const regex = webRegex.regex; // webLog 정규식 
    // webIp, webUrl, webDate, webMethod
    logArray.forEach(element => {
        const regexIp = element.match(regex.webIp);
        const regexMethod = element.match(regex.webMethod);
        const regexDate = element.match(regex.webDate);
        const regexRefer = element.match(regex.webRefer);
        if(regexIp && regexMethod && regexDate && regexRefer){
            webLogObject.push({
                ip: regexIp[0],
                method: regexMethod[0],
                date: regexDate[0],
                refer: regexRefer[0]
            });
        }
        else if(regexIp && regexMethod && regexDate){
            webLogObject.push({
                ip: regexIp[0],
                method: regexMethod[0],
                date: regexDate[0],
                refer: '/'
            });
        }
    });
    return webLogObject;
};