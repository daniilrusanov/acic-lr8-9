let connection = require('../config/config.bd');

let Product = function (product) {
    this.idProduct = product.idProduct;
    this.Name = product.Name;
    this.Category = product.Category;
    this.Price = product.Price;
    this.Amount = product.Amount;
    this.idSupplier = product.idSupplier;
    this.idWarehouse = product.idWarehouse;
}

Product.create = function (newProduct, result) {
    connection.query("INSERT INTO Products set ?", newProduct, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
}

Product.findById = function (id, result) {
    connection.query("SELECT * FROM Products WHERE idProduct = ?", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
}

Product.findAll = function (result) {
    connection.query("SELECT * FROM Products", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            console.log('product : ', res);
            result(null, res);
        }
    });
}

Product.update = function (id, newProduct, result) {
    connection.query("UPDATE Products SET Name=?, Category=?, Price=?, Amount=?, idSupplier=?, idWarehouse=? WHERE idProduct = ?",
        [newProduct.Name, newProduct.Category, newProduct.Price, newProduct.Amount, newProduct.idSupplier, newProduct.idWarehouse, id],
        function (err, res) {
            if (err) {
                console.log("error: ", err);
                result(null, err);
            } else {
                result(null, res);
            }
        });
}

Product.delete = function (id, result) {
    connection.query("DELETE FROM Products WHERE idProduct = ?", [id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    })
}

module.exports = Product;
