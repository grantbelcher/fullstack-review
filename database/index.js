const mongoose = require('mongoose');
var myConnection = 'mongodb://localhost/fullStack';
mongoose.connect('mongodb://localhost/fullStack');

var connection = mongoose.connection;
connection.on('connected', function(){
  console.log(`connected to ${myConnection}`)
})

connection.on('disconnected', function(){
  console.log('dissconnected to db')
})

let repoSchema = new mongoose.Schema({
  // TODO: your schema here!
  _id: Number,
  userName: String,
  repoName: String,
  url: String,
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);



let save = (err, repoCollection) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  repoCollection.forEach((obj) => {
    var currentRepo = new Repo({
      _id: obj.id,
      userName: obj.owner.login,
      repoName: obj.name,
      url: obj.html_url,
      fork: obj.forks
    })
    console.log(currentRepo)
    currentRepo.save(function (err, currentRepo) {
      if (err) {
        return console.error(err)
      } else {
        console.log(`${currentRepo} added to database`)
      }
    })
  })

}


module.exports.save = save;