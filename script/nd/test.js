var http = require('http');
var fs = require('fs');

var myServer = http.createServer(function (req, res) {
    var html = fs.readFileSync('app/axioslearn.html');
    res.write(html);
    res.end();
})

myServer.listen('8988', function (err) {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log("The service is open and running.");
})