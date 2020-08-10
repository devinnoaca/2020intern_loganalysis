/* 어느 페이지에 누가 방문했는지 알아내는 모듈 */
const fs = require('fs');
const objectToJson = require('../objectToJson');
const countingKeyword = require('./counting/countingKeyword');
/* 자동으로 할 방법 더 고민해보기 */


exports.countKeyword = (objectType, inputFileName, outputFileName) =>{ 
    const readFile =  fs.readFileSync(inputFileName,'utf-8');
    const parseFile =  JSON.parse(readFile);
    const countedData = countingKeyword.countingKeyword(parseFile, objectType);
    countedData.sort((a,b)=>{ //내림 차순 정렬
        return a.count > b.count ? -1 : a.count < b.count ? 1 : 0;
    });
    objectToJson.objectToJson(outputFileName, countedData);
};