const { createCountedFile }  = require('../webLog/counting/createCountedFile');
const { visualKeyword } = require('../webLog/counting/visualKeyword');
exports.mainCounter = async (reqParams) =>{
    const dataType =  reqParams.dataType;  
    const inputName = 'jsonLogs/webLogs/' + reqParams.inputName;
    const outputName = 'jsonLogs/webLogs/countedLogs/' + dataType +'-'+ reqParams.outputName;
    try{
        await createCountedFile(dataType, inputName, outputName);
        visualKeyword(outputName,'jsonLogs/webLogs/visualLogs/visual-' + dataType +'.json');
        return true;
    }catch(err){
        console.error(`Error: ${err.message}`);
        return false;
    }
};