var express = require('express');
var app = express();


app.get('*',(request,response)=>{
    console.log(request.url);
    response.write("Hola amiguito!");
    response.end();
});
app.listen(3000)