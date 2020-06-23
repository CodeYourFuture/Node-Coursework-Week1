// server.js
// This is where your node app starts

//load the 'express' module which makes writing webservers easy
const express = require("express");
const app = express();

//load the quotes JSON
const quotes = require("./quotes.json");

const cors = require('cors');

app.use(cors());
// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
 
app.get("/", function(request, response) {
  response.send("My Quote Generator Server!  Ask me for /quotes/random, or /quotes");
});

//START OF YOUR CODE...
app.get("/quotes", function(request, response) {
  response.json(quotes);
});
app.get("/quotes/random", function(request, response) {
  const randomQuote=pickFromArray(quotes)
  response.json(randomQuote);
});
app.get("/quotes/search", function(request, response) {
  const searchTerm=request.query.term;
  const searchResult=quotes.filter(element=>{ return element.quote.toLowerCase().includes(searchTerm.toLowerCase())||element.quote.toLowerCase().includes(searchTerm.toLowerCase())});;
   
  response.json(searchResult);
   
});




//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//
function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//Start our server so that it listens for HTTP requests!
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
