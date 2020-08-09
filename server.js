// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');
 /* Middleware */

 //Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');  // Lets browser and server talk to each other without security interruptions
app.use(cors());

// Initialize the main project folder
app.use(express.static('Web-APIs'));  // folder you want them to look at

const port = 3000;

// Bring up the server
const server = app.listen(port, listening);
/* const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)})  */

// Callback to debug
function listening() {
    console.log("server running");
    console.log(`running on localhost: ${port}`);
};

// GET routes
app.get('/', function(req, res) {
  res.send('Hello World');
})

// app.get('/all', sendData);
//
// function sendData (request, response) {
//   response.send(projectData);
// };

// POST route
// app.post('/add', callBack);
//
// function callBack(req, res) {
//   res.send('POST received');
// }
//
// const data = [];
// app.post('/addMovie', addMovie)
//
// function addMovie(req, res) {
//   data.push(req.body);
//   console.log(data);
// }

// Create an empty JS Object
// const appData = {}

// Respond with JS object when a GET request is made to the homepage
// app.get("/all", function(req, res) {
//   res.send(appData);
// });

// app.post('/', function (req, res) {
//   res.send('POST received')
// })

// app.get("/", function(req, res) {
//   res.send('hello world');
// })

// Setup a basic POST route in the server side code.
// Create an array to hold data.
// const data = [];
// Create post() with a url path and callback Functions
// app.post('/addMovie', addMovie);
// Add the data received in the callback Functions
// function addMovie (req, res){
//    console.log(req.body)
//    data.push(req.body)
// }


/* Can also use an arrow function */
/* const server = app.listen(port, ()=>{console.log(`running on localhost: ${port}`)})  */

// Steps to creating a local server
// Set your variables

// In this example, we set our variable to port 8000.

// const port = 8000;
// Utilize the .listen() method

// Set your variable named server, and pass the listen method with two arguments port and listening.

// const server = app.listen(port, listening);

// The port argument refers to the port variable we set above. The listening argument refers to a callback function we create.
// The listening function

// This function will run when we execute the listen method to let you know that the server is running and on which port by logging messages to the console.

// function listening(){
//      console.log("server running");
//      console.log(`running on localhost: {$port}`);
// }
