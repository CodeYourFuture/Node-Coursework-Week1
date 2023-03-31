//load the 'express' module which makes writing webservers easy

const express = require("express");
const app = express();
const port = 3000;
//load the quotes JSON
const quotes = require("./quotes.json");

// Now register handlers for some routes:
//   /                  - Return some helpful welcome info (text)
//   /quotes            - Should return all quotes (json)
//   /quotes/random     - Should return ONE quote (json)
app.get("/", function (request, response) {
  response.send(
    "Zobeir's Quote Server!  Ask me for /quotes/random, or /quotes"
  );
});

app.get("/quotes", (req, res) => {
  res.send(quotes.map((q) => `${q.quote + "   " + q.author}`));
});

app.get(`/quotes/random`, (req, res) => {
  res.send(pickFromArray(quotes));
});

//...END OF YOUR CODE

//You can use this function to pick one element at random from a given array
//example: pickFromArray([1,2,3,4]), or
//example: pickFromArray(myContactsArray)
//

//Start our server so that it listens for HTTP requests!
app.listen(port, () => console.log("Your app is listening on port 3000"));
// const listener = app.listen(process.env.PORT, function () {
//   console.log("Your app is listening on port " + listener.address().port);
// });

function pickFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
