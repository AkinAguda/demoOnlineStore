const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    // products.push(this);
    fs.readFile(p, (err, content) => {
      let products = [];
      if (!err) {
        products = JSON.parse(content);
      } else {
        // console.log(err);
      }
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (error) => {
        // console.log(error);
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
