var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

<<<<<<< Updated upstream
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
=======
const indexRouter = require('./routes/index');
>>>>>>> Stashed changes

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
<<<<<<< Updated upstream
=======
//staic 경로 설정
app.use(express.static(path.join(__dirname, 'logs')));
app.use(express.static(path.join(__dirname, 'jsonLogs')));
app.use(express.static(path.join(__dirname, 'views')));

>>>>>>> Stashed changes

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
