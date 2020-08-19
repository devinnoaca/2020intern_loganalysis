const fs = require('fs');

isLogInputValid = (req, res, next) =>{
    const inputFile = req.params.inputName;
    const findString = '.log';
    if(inputFile.indexOf(findString)===-1){
        res.json({
            isSuccess: false,
            message: '입력 파일이 LOG 파일이 아닙니다. 확인해주세요.',
          });
          return;
    }
    next(); 
};

isJsonInputValid = (req, res, next) =>{
    const inputFile = 'jsonLogs/webLogs/' + req.params.inputName;
    const findString = '.json';
    if(inputFile.indexOf(findString)===-1){
        res.json({
            isSuccess: false,
            message: '입력 파일이 JSON 파일이 아닙니다. 확인해주세요.',
          });
          return;
    }
    next(); 
};

isJsonOutputValid = (req, res, next) =>{
    const outputFile = req.params.outputName;
    const findString = '.json';
    if(outputFile.indexOf(findString)===-1){
        res.json({
            isSuccess: false,
            message: '출력 파일이 JSON 파일이 아닙니다. 확인해주세요.',
          });
          return;
    }
    next(); 
};

isFileValid = (req, res, next) => {
    const inputFile = 'logs/webLogs/'+ req.params.inputName;
    console.log(inputFile);
    try {
        fs.statSync(inputFile);
    }
    catch (err) {
      if (err.code === 'ENOENT') {
        res.json({
            isSuccess: false,
            message: '입력 파일이 존재하지 않습니다. 확인해주세요',
        });
          return;
        }
    }
    next();
};

module.exports = {
    isLogInputValid,
    isJsonInputValid,
    isJsonOutputValid,
    isFileValid,
};