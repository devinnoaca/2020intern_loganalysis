/* Weblog를 parsing해서 객체를 생성 */
const webRegex = require("../../regex/webLogRegex");

splitMethod = (Method) => { //Method 처리 모듈
    try{
        if(Method) return Method.split(' ');
        //ex) [ '"GET', '/blog/tags/puppet?flav=rss20', 'HTTP/1.1"' ]
    }
    catch(err){
        console.log(err);
        return 0;
    }
};

exports.webLogParser = (logArray) =>{  //split된 로그 배열을 입력 받음; 
    const webLogObject = [];
    const regex = webRegex.regex; // webLog 정규식 
    // webIp, webUrl, webDate, webMethod
    logArray.forEach(element => {
        const regexIp = element.match(regex.webIp);
        const regexMethod = element.match(regex.webMethod);
        const regexDate = element.match(regex.webDate);
        const regexRefer = element.match(regex.webRefer);
        let realMethod;

        if(regexMethod) {
            realMethod = splitMethod(regexMethod[0]);
            if(realMethod[1].indexOf('.ico')!=-1) realMethod=0; // ico 데이터는 필요 없음
            else if(realMethod[1].indexOf('.css')!=-1) realMethod=0; // css 데이터는 필요 없음

        }
        
        if(regexIp && realMethod && regexDate && regexRefer){
            webLogObject.push({
                ip: regexIp[0],
                method: realMethod[0],
                url: realMethod[1],
                date: regexDate[0],
                refer: regexRefer[0]
            });
         }
        else if(regexIp && realMethod && regexDate){
            webLogObject.push({
                ip: regexIp[0],
                method: realMethod[0],
                url: realMethod[1],
                date: regexDate[0],
                refer: '/'
            });
        }
        else if(realMethod && regexDate){
            webLogObject.push({
                ip: '127.0.0.1',
                method: realMethod[0],
                url: realMethod[1],
                date: regexDate[0],
                refer: '/'
            });
         }

    });
    return webLogObject;
};