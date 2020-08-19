/*메소드 전용 split 함수 */
exports.splitMethod = (Method) => { //Method 처리 모듈
    try{
        return Method.split(' ');
    }catch(err){
        console.error(`Error: ${err.message}`);
        return;
    }
};