require('dotenv').config();
const express = require('express')
const app = express()

// app.use(express.static('public'));
// app.use(express.json());

app.get('/', function(req, res){
    res.send('Helo World');
});

app.get('/admin', function(req, res){
    res.send('Helo Admin');
});

app.listen(process.env.PORT, function(){
    console.log('Server is running on port ' + process.env.PORT);
});