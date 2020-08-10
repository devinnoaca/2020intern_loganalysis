/*메소드 전용 split 함수 */

exports.splitMethod = (Method) => { //Method 처리 모듈
        if(Method) return Method.split(' ');
        else {
            console.log('splitMethod 함수 작동 실패');    
            return 0;
        }
};