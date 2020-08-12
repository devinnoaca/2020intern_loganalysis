<<<<<<< Updated upstream
var express = require('express');
var router = express.Router();
const logParer = require('../logic/webLog/logParser.js');
const split = require('../logic/splitLog');
const toJson = require('../logic/objectToJson');
const countObject = require("../logic/webLog/countUrl");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  // const testData = `"message":"::ffff:39.7.51.224 - - [14/Jul/2020:02:43:17 +0000] \"GET / HTTP/1.1\" 304 - \"-\" \"Mozilla/5.0 (Linux; Android 10; SAMSUNG SM-G965N/KSU3ETF4) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/12.0 Chrome/79.0.3945.136 Mobile Safari/537.36\"\n","level":"info"`;
  const logData = split.splitLog('./logs/webLogs/apache_logs.log');
  // const logData = split.splitLog('./logs/webLogs/WebLog_20200713.log');
  const ParseDate = logParer.webLogParser(logData);  
  toJson.objectToJson('./jsonLogs/apache.json', ParseDate);
    // toJson.objectToJson('./jsonLogs/123.json', ParseDate);
  countObject.countUrl('./jsonLogs/apache.json','./jsonLogs/countRefer.json', 'url');
});

=======
const express = require('express');
const router = express.Router();

router.use('/webLogs', require('./webLogs'));
// router.use('/dbLogs', require('/dbLogs'));
// router.use('/sysLogs', require('sysLogs'))
>>>>>>> Stashed changes
module.exports = router;
