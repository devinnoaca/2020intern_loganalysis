/*메소드에서 ico, css 데이터를 걸러주는 함수 */
const splitMethod = require('./splitMethod');

exports.methodPaser = (method) =>{
    if(method) {
        const parsedMethod =  splitMethod.splitMethod(method[0]);
        if(parsedMethod){
            if(parsedMethod[1].indexOf('.ico')!=-1) return 0; // ico 데이터는 필요 없음
            if(parsedMethod[1].indexOf('.css')!=-1) return 0; // css 데이터는 필요 없음
            return parsedMethod;
        }
    }
    return 0;
};

