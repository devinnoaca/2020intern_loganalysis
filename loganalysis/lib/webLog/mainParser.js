const { regexParser } = require('./parsing/regexParser');
const { splitLog } = require('../splitLog');
const { objectToJson } = require('../objectToJson');
exports.mainParser = async (reqParams) =>{
    const inputName = 'logs/webLogs/' + reqParams.inputName;
    const outputName = 'jsonLogs/webLogs/' + reqParams.outputName;
    let splitData, logData;
    try{
        splitData = await splitLog(inputName); 
        logData = await regexParser(splitData);
        objectToJson(outputName, logData);
    }catch(err){
        console.error(`Error: ${err.message}`);
        return;
    }
};