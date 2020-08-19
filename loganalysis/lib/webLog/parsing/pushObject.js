/*오브젝트에 값을 넣는 함수*/
/* ip가 로컬이거나, refer가 루트일경우 파싱을 제대로 하지 못함
그렇기 때문에 구분이 필요하다. 
*/
exports.pushObject = (regexIp, realMethod, regexDate, regexRefer)=>{
    if(regexIp && realMethod && regexDate && regexRefer){ //모든 데이터가 있을 경우
       const webLogObject = {
            ip: regexIp[0],
            method: realMethod[0],
            url: realMethod[1],
            date: regexDate[0],
            refer: regexRefer[0]
        };
        return webLogObject;
    }
    if(regexIp && realMethod && regexDate){ // refer == '/'
        const webLogObject = {
            ip: regexIp[0],
            method: realMethod[0],
            url: realMethod[1],
            date: regexDate[0],
            refer: '/'
        };
        return webLogObject;
    }
    if(realMethod && regexDate && regexRefer ){ //ip == local
        const webLogObject = {
            ip: '127.0.0.1',
            method: realMethod[0],
            url: realMethod[1],
            date: regexDate[0],
            refer: regexRefer[0],
        };
        return webLogObject;
     }

    if(realMethod && regexDate){ // ip == local && refer == '/' 
        const webLogObject = {
            ip: '127.0.0.1',
            method: realMethod[0],
            url: realMethod[1],
            date: regexDate[0],
            refer: '/'
        };
        return webLogObject;
     }
    //  console.log('pushObject 함수 실행 실패');
     return;
};