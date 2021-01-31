var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dheeru',{
    
       useNewUrlParser:true, 
       useUnifiedTopology: true
    }).then(()=>{
         console.log('Succefull');
    }).catch((e)=>{
         console.log('Error');
    })