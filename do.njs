var fs = require('fs');
var querystring = require('querystring');
var param = querystring.parse(process.env.QUERY_STRING);
var data =fs.readFileSync('name.json','utf-8');

var student=new Arrary();
var splits=param.id.split(" ");
var count=0;
JSON.parse(data, function(k,v){
  for(i=splits.length;i--;i<0)
  {
    if (splits[i] ==k){
      student[i] = v;
      count++;
    }
  }
  
});

console.log('Content-type: text/html; charset=utf-8\n');
if (count ==0){
  console.log('<h1>抱歉,'+splits+ count+'與狗不得入內</h1>');}
else{
  console.log('<h1>'+student+' 4ni</h1>');
}
