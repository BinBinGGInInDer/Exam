var fs = require('fs');
var querystring = require('querystring');
var param = querystring.parse(process.env.QUERY_STRING);
var data =fs.readFileSync('name.json','utf-8');

var student = '';
JSON.parse(data, function(k,v){
  if (param.id ==k){
    student = v;
  }
});

console.log('Content-type: text/html; charset=utf-8\n');
if (student ==''||param.id ==''){
  console.log('<h1>抱歉,'+param.id+'與狗不得入內</h1>');}
else{
  console.log('<h1>'+student+' 4ni</h1>');
}
