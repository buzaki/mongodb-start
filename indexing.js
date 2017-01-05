var indexCollection = function(db, callback) {
  db.collection('documents').createIndex(
    { "a": 1 },
      null,
      function(err, results) {
        console.log(results);
        callback();
    }
  );
};


var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

//var url = 'mongodb://localhost:27017/myproject';
var url = 'mongodb://mydb:1234@PUBLIC_UP:27017/mydb';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  indexCollection(db, function(){
  })

  db.close();
});
