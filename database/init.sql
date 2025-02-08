DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;
USE testdb;
CREATE TABLE messages (id INT AUTO_INCREMENT PRIMARY KEY, message VARCHAR(255));
INSERT INTO messages (message) VALUES ('Hello from MySQL Database!');
