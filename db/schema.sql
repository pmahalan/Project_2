CREATE DATABASE people_db;
USE people_db;
CREATE TABLE people (
    date_texted DATETIME NOT NULL,
    name VARCHAR(60),
    cell BIGINT PRIMARY KEY,
    email VARCHAR(60),
    
);




CREATE TABLE events (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    date_event DATETIME NOT NULL,
    title VARCHAR (100),
    location VARCHAR (60),
    host VARCHAR(60),
);