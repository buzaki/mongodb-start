
// insert document query
var insertDocuments = function(db, callback) {
  var collection = db.collection('documents');
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}


var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

var url = 'mongodb://mydb:1234@PUBLIC_UP:27017/mydb';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  insertDocuments(db, function(){
  })

  db.close();
});
