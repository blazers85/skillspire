var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

 app.use('/', function(request, response){
    response.send('Hey team hey !!!!!')
 })
app.use(express.static(_dirname + '/app/'));
app.use(function(req,res,next){
    res.status(404).sindFile(__dirname + '/app/foOhfo.html')
})

app.listen(port, function() {
    console.log('Party at port' + port)
})
