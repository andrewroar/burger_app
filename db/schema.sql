DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
USE burger_db;



CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false

);

