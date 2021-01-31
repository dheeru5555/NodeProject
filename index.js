const express = require('express')
const app = express();
const hbs = require('hbs');
const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 


require("./db/conn");
const Register = require('./model/register');

const port = process.env.port || 4000;

//app.use(express.static('public')) // Serving css/js file 
app.set('view engine','hbs')
app.set("views",path.join(__dirname,"./views/layouts")) // For hbs files access

var display = Register.find({});

// Code for displaying Data

app.get('/',function(req,res,next){ 
    display.exec(function(err,data){
        if(err)throw err;
        res.render('index',{title:'Employee Record',records:data});
    });
}); 


// Code for Insert Data 
app.post('/insert', (req,res) => {
    if (!req.body.name == '')
       insertIntoMongoDB(req, res);
    });
     
    //Creating function to insert data into MongoDB
    function insertIntoMongoDB(req,res) 
    {
        var course = new Register();
        course.name = req.body.name;
        course.email = req.body.email;
        course.user = req.body.username;
        var save = course.save();
        if (save)
           res.redirect('/insert','sssssssssss');
        else
           console.log('Error during record insertion : ' + err); 
    }
app.get('/delete/:id', (req, res) => {
     Course.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) {
        res.redirect('/course/list');
      }
      else { console.log('Failed to Delete Course Details: ' + err); }
    });
 });
          My Name is Dheeraj
app.listen(port,()=>{
    console.log('Success');
});

My Name is Dheeraj  My Name is Dheeraj  My Name is Dheeraj  My Name is Dheeraj