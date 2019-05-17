const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
let _db;
const consoleColor = require('../util/ConsoleColor'); 

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://z:z@cluster0-tiie4.mongodb.net/test?retryWrites=true',
    { useNewUrlParser: true }
  )
    .then(client => {
      consoleColor.yellow('  Соединение с MongoDb установлено! (util/database.js, 12)   ');
      _db = client.db('shop');
      callback();
    })
    .catch(err => {
      consoleColor.red(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
