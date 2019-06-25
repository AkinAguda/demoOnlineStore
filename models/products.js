const fs = require('fs');
const path = require('path');

const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
const Cart = require('./cart');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
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
      if (this.id) {
        const existingProductIndex = products.findIndex(prod => prod.id === this.id);
        const updatedProduct = [...products];
        updatedProduct[existingProductIndex] = this;
        fs.writeFile(p, JSON.stringify(updatedProduct), (error) => {
          if (error) throw error;
        });
      } else {
        this.id = Math.random().toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), (error) => {
          if (error) throw error;
        });
      }
    });
  }

  static async delete(id) {
    const prods = await this.fetchAll();
    const product = prods.find(prod => prod.id === id);
    const newArr = prods.filter(prod => prod.id !== id);
    fs.writeFile(p, JSON.stringify(newArr), (error) => {
      if (error) {
        throw error;
      } else {
        Cart.deleteProduct(id, product.price);
      }
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
      // reject(new Error('Something went wrong'));
    });
    const res = await prod;
    return res;
  }

  static async findById(id) {
    const products = await this.fetchAll();
    return products.find(prod => prod.id === id);
  }
};
