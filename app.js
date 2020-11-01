const express = require('express');
const path = require('path');
const cons = require('consolidate');
const bodyParser = require("body-parser");

// Init app
const app = express();
app.use(bodyParser.urlencoded({extended:true}));

// Load view engine 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes 


// index route
// app.get('/', function (req, res) {
//     res.render('index')
// });


//index route with EJS
app.get('/', function (req, res) {
    res.render('index')
});


// Home route
// app.get('/', function (req, res) {
//     var myArray = ["This", "is", "a", "list", "with", "new", "item"];
//     var mySecondArray = ["Second","Array"];
//     var myCustomString = "HelloWorld";
//     res.render('home',{myString: myCustomString,
//     listType:"ul",
//     myArray: myArray,
//     mySecondaryArray: mySecondArray});
// });

//todo route with EJS
app.get('/todo', function (req, res) {
    res.render('todo')
});


// // todo route
// app.get('/todo', function (req, res) {
//     res.render('todo')
// });


// Set public folder
app.use(express.static(path.join(__dirname, 'public')));



app.listen(3000, function() {
    console.log("server started on port 3000...")
})