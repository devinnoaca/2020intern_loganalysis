/*타입을 입력받고 객체를 반환함*/
const counted = [];


exports.countingKeyword = (parsedArray, objectType) =>{
    counted.length=0; // 배열 초기화 필수
        parsedArray.forEach(e => {
            if(objectType === 'ip') countingIp(e.ip);
            if(objectType === 'date') countingDate(e.date);
            if(objectType === 'url')  countingUrl(e.url);
            if(objectType === 'method') countingMethod(e.method);
            if(objectType === 'refer') countingRefer(e.refer);
        });
    return counted;
};





countingIp = (inputData) =>{ //현재 counted 배열에 객체가 이미 존재하면 count up
    let flag = 0;
    counted.some(countedArray => {
        if(countedArray.ip===inputData){
            countedArray.count +=1;
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


countingDate = (inputData) =>{ //현재 counted 배열에 객체가 이미 존재하면 count up
    let flag = 0;
    counted.some(countedArray => {
        if(countedArray.Date===inputData){
            countedArray.count +=1;
            flag=1;
            return;
        }
    });
    if(flag===0){
        counted.push({
            Date: inputData,
            count: 1,
         });
    }
    return;
};



countingUrl = (inputData) =>{ //현재 counted 배열에 객체가 이미 존재하면 count up
    let flag = 0;
    counted.some(countedArray => {
        if(countedArray.url===inputData){
            countedArray.count +=1;
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



countingMethod = (inputData) =>{ //현재 counted 배열에 객체가 이미 존재하면 count up
    let flag = 0;
    counted.some(countedArray => {
        if(countedArray.method===inputData){
            countedArray.count +=1;
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


// refer 카운팅
countingRefer = (inputData) =>{ 
    let flag = 0;
    counted.some(countedArray => {
        if(countedArray.refer===inputData){
            countedArray.count +=1;
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


