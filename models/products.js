const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    fs.readFile(p, (err, content) => {
      let products = [];
      if (!err) {
        products = JSON.parse(content);
      } else {
        throw err;
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (error) => {
      });
    });
  }

  static async fetchAll() {
    const prod = new Promise((resolve, reject) => {
      fs.readFile(p, (err, content) => {
        if (err) {
          resolve([]);
        }
        resolve(JSON.parse(content));
      });
    });
    const res = await prod;
    return res;
  }
};
