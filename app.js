var koa = require('koa');
var app = new koa();

app.use(function* () {
    this.body = 'hello world!';
});

app.listen(3000, '0.0.0.0',function(){
    console.log('Server running on https://0.0.0.0:3000');
});