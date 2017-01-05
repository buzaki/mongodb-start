

var findDocuments2 = function(db, callback) {
  var collection = db.collection('documents');
  collection.find({'a': 3}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });      
}


var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

//var url = 'mongodb://localhost:27017/myproject';
var url = 'mongodb://mydb:1234@PUBLIC_UP:27017/mydb';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  findDocuments2(db, function(){
  })

  db.close();
});
