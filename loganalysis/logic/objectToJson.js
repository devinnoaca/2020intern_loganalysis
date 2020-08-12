/* 객체와 경로를 입력받아 JSON 파일을 생성 */ 
/*ds.js를 사용하기 위해서 객체를 JSON 파일로 바꿔야한다.*/
const fs = require('fs');

exports.objectToJson = (path, objectArray) =>{ // path 어느 경로에 저장할 것인지
    try{
        fs.writeFileSync(path, JSON.stringify(objectArray, null, 4)); 
    }catch(err){
        console.log(err);
        return;
    }
};
