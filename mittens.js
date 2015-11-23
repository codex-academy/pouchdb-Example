var db = new PouchDB('kittens');

var doc = {
  "_id": "mittens",
  "name": "Mittens",
  "occupation": "kitten",
  "age": 3,
  // "hobbies": [
  //   "playing with balls of yarn",
  //   "chasing laser pointers",
  //   "lookin' hella cute"
  // ]
};

var createMittens = function () {
  console.log('put mittens in');
  db.put(doc).then(function (doc) {
    console.log('putted mittens in');
  }).catch(function (err) {
    console.log(err);
  });
}

var readMittens = function () {
  console.log('get mittens');
  db.get('mittens').then(function (doc) {
    console.log('mittens is:');
    console.log(doc);
  }).catch( function(err) {
    console.log(err);
  });
}

var updateMittensAge = function (age) {
  console.log('update mittens age');
  db.get('mittens').then(function (doc) {
    // update their age
    doc.age = age;
    // put them back
    return db.put(doc);
  }).then(function () {
    // fetch mittens again
    return db.get('mittens');
  }).then(function (doc) {
    console.log('updated mittens is:');
    console.log(doc);
  }).catch(function (err) {
    console.log(err); 
  });
}

var deleteMittens = function () {
  console.log('remove mittens');
  db.get('mittens').then(function(doc) {
    return db.remove(doc);
  }).then(function (result) {
    console.log('removed mittens');
  }).catch(function (err) {
    console.log(err);
  });
}

var destroyKittens = function() {
  db.destroy().then(function () {
    console.log('destroyed');
  }).catch(function (err) {
    console.log(err);
  });
}
