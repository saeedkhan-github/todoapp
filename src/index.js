const express = require('express');

const api = express();
api.use (express.static(__dirname +'/public'));

api.listen(3000,()=>{
    console.log('API Up and running');
});

api.post('/add',(req,res)=>{
    res.send('it works');
});

api.get('/',(req,res)=>{
    console.log(req);

    res.send('Hello');
});