const express = require('express')
const app = express();
const hbs = require('hbs'); // Template Engine Handlebars
const path = require('path');
const bodyParser = require('body-parser'); //Parse the HTML form data available using req.body

app.use(bodyParser.urlencoded({ extended: true })); 

require("./db/conn");
const Register = require('./model/register'); // Getting MongoDB Database access here

const port = process.env.port || 4000;

//app.use(express.static('public')) // Serving css/js file 

app.set('view engine','hbs') // Setting View Engine Handlebars here
app.set("views",path.join(__dirname,"./views/layouts")) // For hbs files access


// Now Below Code will perform CRUD Operation Insert ,Delete & Update 

var display = Register.find({});

// Code for displaying Data on Index page
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
     
    //Creating function to insert data into MongoDB but not neccessary to create a function 
    function insertIntoMongoDB(req,res) 
    {
        var course = new Register();
        course.name = req.body.name;
        course.email = req.body.email;
        course.user = req.body.username;
        var save = course.save();
        if (save)
           res.redirect('/');
        else
           console.log('Error during record insertion : ' + err); 
    }

 // Code for Delete    

app.get('/:id', (req, res) => {
      Register.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err)
         {
           res.redirect('/');
         }
        else 
         {
           console.log('Failed to Delete Course Details: ' + err);
         }
     });
});

// To show select data on update element on edit.hbs page

app.get('/edit/:id', (req, res) => {
    Register.findById({_id:req.params.id},req.body, { new: true },(err,docs)=>{
       if(err)
       {
           console.log('Cant retreive date and edit');
       }
       else
       {
           res.render('edit',{club:docs});
       }
    })
});

// Now Update Data here using ID

app.post('/update/:id',(req,res)=>{
      Register.findByIdAndUpdate({_id:req.params.id},req.body,(err,docs)=>{
          if(err)
          {
              console.log('Error');
          }  
          else
          {  
              res.redirect('/');
          }
      });
});

 // Port and Success Message       
app.listen(port,()=>{
    console.log('Success');
});
