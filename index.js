var express = require('express');
app = express();
port = process.env.PORT || 3000;

app.use(express.static (__dirname + '/views'));
app.get('/', function (req,res) {
    res.send ('index.html');
});

app.listen (port, function () {
    console.log('listening on port ' + port);
});