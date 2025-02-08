DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;
USE testdb;

CREATE TABLE messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    message VARCHAR(255) NOT NULL
);

INSERT INTO messages (id, message) VALUES (1, 'Hello from MySQL Database!')
ON DUPLICATE KEY UPDATE message='Hello from MySQL Database!';
