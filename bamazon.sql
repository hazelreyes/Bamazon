DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
    item_id INTEGER(11) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price INT NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("camera", "electronics", 100, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("laptop", "electronics", 2000, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("crib", "baby", 1000, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("diapers", "baby", 30, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("soap", "bath", 5, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shampoo", "bath", 3, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("tv", "electronics", 300, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("baby bottle", "baby", 2, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("dog food", "pet", 20, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("dog toy", "pet", 4, 25);

SELECT * FROM products;