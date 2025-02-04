CREATE DATABASE shopping_db;

USE shopping_db;

CREATE TABLE items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    price VARCHAR(255)
);

INSERT INTO items (name, price) VALUES ('Laptop', '$1000');
INSERT INTO items (name, price) VALUES ('Headphones', '$200');
INSERT INTO items (name, price) VALUES ('Smartphone', '$800');
