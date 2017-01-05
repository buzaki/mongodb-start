var removeDocument = function(db, callback) {
  var collection = db.collection('documents');
   collection.deleteOne({ a : 3 }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Removed the document with the field a equal to 3");
    callback(result);
  });    
}


var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');

//var url = 'mongodb://localhost:27017/myproject';
var url = 'mongodb://mydb:1234@PUBLIC_UP:27017/mydb';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  removeDocument(db, function(){
  })

  db.close();
});
