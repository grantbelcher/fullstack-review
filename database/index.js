const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = new mongoose.Schema({
  // TODO: your schema here!
  userName: {type: String},
  repoName: {type: String},
  url: {type: String},
  forks: {type: Number}
});

let Repo = mongoose.model('Repo', repoSchema);




let save = (repoCollection) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  repoCollection.forEach((obj) => {
    var currentRepo = new Repo(obj)
    console.log(currentRepo)
    currentRepo.save(function (err, currentRepo) {
      if (err) {
        return console.error(err)
      } else {
        console.log(`${currentRepo.repoName} added to database`)
      }
    })
  })




}

module.exports.save = save;