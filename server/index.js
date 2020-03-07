const express = require('express');
const bodyParser = require('body-parser')
const github = require('../helpers/github.js')
const database = require('../database/index.js')
let app = express();

console.log(database, 'dsdsdsdsdsdsdsdds')
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())


function repoCb (collection) {
  var array = collection.map((repo) => ( repo))
  return array
}


app.post('/repos', function (req, res) {



  var collection = github.getReposByUsername('grantbelcher', database.save)


  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {
  res.send('repos appear here')
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

