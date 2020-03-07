const express = require('express');
const bodyParser = require('body-parser')
const github = require('../helpers/github.js')
const database = require('../database/index.js')
let app = express();




app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json())


function repoCb (collection) {
  var array = collection.map((repo) => ( repo))
  return array
}


app.post('/repos', function (req, res) {



  // var collection =
  github.getReposByUsername(req.body.query, database.save)
  res.status(200).send('repos posted!')

  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
});

app.get('/repos', function (req, res) {

  database.extract(res.send.bind(res))


  // res.send('repos appear here')
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

