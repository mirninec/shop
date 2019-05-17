const mongodb = require('mongodb');
const getDb = require('../util/database').getDb;
const consoleColor = require('../util/ConsoleColor'); 

class Product {
  constructor(title, price, description, imageUrl, id, userId) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this._id = id ? new mongodb.ObjectId(id) : null;
    this.userId = userId;
  }

  save() {
    const db = getDb();
    let dbOp;
    if (this._id) {
      // Update the product
      dbOp = db
        .collection('products')
        .updateOne({ _id: this._id }, { $set: this });
    } else {
      dbOp = db.collection('products').insertOne(this);
    }
    return dbOp
      .then(result => {
        consoleColor.yellow('Сохранение нового/измененного продукта (models/product.js, 15)');
        //console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  static fetchAll() {
    consoleColor.yellow('Обращение к методу fetchAll (models/product.js, 37)');
    const db = getDb();
    return db
      .collection('products')
      .find()
      .toArray()
      .then(products => {
        consoleColor.yellow(
          'Продукты из коллекции "pruducts" в количестве '+ products.length
          +' получены. (models/product.js, 41)'    
          );        
        return products;
      })
      .catch(err => {
        consoleColor.red('Ошибка при получении продуктов из коллекции "products"');        
        consoleColor.red(err);
      });
  }

  static findById(prodId) {
    consoleColor.yellow('Обращение к методу findById (models/product.js, 57)');
    const db = getDb();
    return db
      .collection('products')
      .find({ _id: new mongodb.ObjectId(prodId) })
      .next()
      .then(product => {
        consoleColor.yellow(' Название продукта: ' + product.title + '(models/product.js, 56)', 'blue');
        return product;
      })
      .catch(err => {
        consoleColor.red(err);
      });
  }

  static deleteById(prodId) {
    consoleColor.yellow('Обращение к методу deleteById (models/product.js, 73)');
    const db = getDb();
    return db
      .collection('products')
      .deleteOne({ _id: new mongodb.ObjectId(prodId) })
      .then(result => {
        consoleColor.yellow('Продукт удален!');
      })
      .catch(err => {
        consoleColor.red(err);
      });
  }
}

module.exports = Product;
