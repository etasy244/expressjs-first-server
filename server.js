
const express = require('express');
const app = express();
app.get('/',function (req,res) { //request and response
    //console.log(req);
    res.send("<h1>hello</h1>");
});
app.get('/contact',function(req,res){
    res.send("contact page");
});
app.get('/about',function (req,res) {
    res.send("<a href='google.com'>click</a>");
});
app.get('/test',function (req,res) {
    res.send("<a href='google.com'>click</a>");
});

app.listen(3000, function(){
    console.log("server started");
});



