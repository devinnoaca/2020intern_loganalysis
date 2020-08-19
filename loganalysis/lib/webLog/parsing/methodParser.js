/*메소드에서 ico, css 데이터를 걸러주는 함수 */
const { splitMethod } = require('./splitMethod');

exports.methodPaser = (method) =>{
    try{
    const parsedMethod = splitMethod(method[0]);
        if(parsedMethod[1].indexOf('.ico')!=-1) return; // ico 데이터는 필요 없음
        if(parsedMethod[1].indexOf('.css')!=-1) return; // css 데이터는 필요 없음
        return parsedMethod;
    }catch(err){
        console.error(`Error: ${err.message}`);
        return;
    }
};

