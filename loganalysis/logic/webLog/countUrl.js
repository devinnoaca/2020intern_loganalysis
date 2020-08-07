/* 어느 페이지에 누가 방문했는지 알아내는 모듈 */
const fs = require('fs');
const toJson = require('../objectToJson');
const counted = [];

/* 자동으로 할 방법 더 고민해보기 */
countingIp = (inputData) =>{ //현재 counted 배열에 객체가 이미 존재하면 count up
    let flag = 0;
    counted.forEach(e => {
        if(e.ip===inputData){
            e.count = e.count+1;
            flag=1;
            return;
        } 
    });
    if(flag===0){
        counted.push({
            ip: inputData,
            count: 1,
        });
    }   
    return;
};


countingMethod = (inputData) =>{ //현재 counted 배열에 객체가 이미 존재하면 count up
    let flag = 0;
    counted.forEach(e => {
        if(e.method===inputData){
            e.count = e.count+1;
            flag=1;
            return;
        } 
    });
    if(flag===0){
        counted.push({
            method: inputData,
            count: 1,
        });
    }   
    return;
};


countingUrl = (inputData) =>{ //현재 counted 배열에 객체가 이미 존재하면 count up
    let flag = 0;
    counted.forEach(e => {
        if(e.url===inputData){
            e.count = e.count+1;
            flag=1;
            return;
        } 
    });
    if(flag===0){
        counted.push({
            url: inputData,
            count: 1,
        });
    }   
    return;
};


countingDate = (inputData) =>{ //현재 counted 배열에 객체가 이미 존재하면 count up
    let flag = 0;
    counted.forEach(e => {
        if(e.ip===inputData){
            e.count = e.count+1;
            flag=1;
            return;
        } 
    });
    if(flag===0){
        counted.push({
            ip: inputData,
            count: 1,
        });
    }   
    return;
};


countingRefer = (inputData) =>{ //현재 counted 배열에 객체가 이미 존재하면 count up
    let flag = 0;
    counted.forEach(e => {
        if(e.refer===inputData){
            e.count = e.count+1;
            flag=1;
            return;
        } 
    });
    if(flag===0){
        counted.push({
            refer: inputData,
            count: 1,
        });
    }   
    return;
};


exports.countUrl = async (inputFileName, outputFileName, object) =>{ 

    try{
    const readFile = fs.readFileSync(inputFileName,'utf-8');
    const parseFile = await JSON.parse(readFile);
    parseFile.forEach(e => {
        if(object === "ip")  countingIp(e.ip);
        if(object === "Date") countingDate(e.date);
        if(object === "url")  countingUrl(e.url);
        if(object === "method") countingMethod(e.method);
        if(object === "refer") countingRefer(e.refer);
    });
        try{
            // toJson.objectToJson('./jsonLogs/countRefer.json', counted);
            toJson.objectToJson(outputFileName, counted);
        }
        catch(err){
            console.log(err);
        }
    }
    catch(err){
        console.log(err);
    }
};