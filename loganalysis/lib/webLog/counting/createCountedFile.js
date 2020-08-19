/* 어느 페이지에 누가 방문했는지 알아내는 모듈 */
const fs = require('fs');
const { objectToJson }= require('../../objectToJson');
const { countingKeyword } = require('./countingKeyword');

exports.createCountedFile = (objectType, inputFileName, outputFileName) =>{ 
    try{
        const readFile = fs.readFileSync(inputFileName,'utf-8');
        const parseFile = JSON.parse(readFile);
        /*객체 내부의 입력받은 type의 개수를 셈 (시각화를 위한 데이터를 만드는 것) */
        const countedData = countingKeyword(parseFile, objectType);
        countedData.sort((a,b)=>{ //객체들을 내림차순으로 정렬 함
            return a.count > b.count ? -1 : a.count < b.count ? 1 : 0;
        });
        /*객체를 JSON 파일로 바꿔줌*/
        objectToJson(outputFileName, countedData);
    }catch(err){
        console.error(`Error: ${err.message}`);
        return false;
    }
};