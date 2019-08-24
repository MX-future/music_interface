var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
let {getMusicUrl} = require('./handle');

var app = express();

app.all('*',function(req,res,next){
  res.header('Access-Control-Allow-Origin', '*');   //允许所有域名的端口请求（本地跨域解决）
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.post('/getMusic',(req,res)=>{
  //获取歌曲来源和歌曲名字
  let S_from = req.query.S_from;
  let S_name = req.query.S_name;

  getMusicUrl(S_from,S_name).then(data=>{
      res.json(data);
  }).catch(err=>{
      res.end('错误')
      console.log('错误',err);
  })
})

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



app.listen(3000,()=>{
  console.log('listen in 3000')
})


module.exports = app;