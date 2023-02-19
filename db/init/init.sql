CREATE DATABASE scoket_app CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE scoket_app;

CREATE TABLE conversation (
    id INT NOT NULL AUTO_INCREMENT,
    conversation LONGTEXT NULL,
    username VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);
CREATE TABLE room_table (
    id INT NOT NULL AUTO_INCREMENT,
    room_name VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);
CREATE TABLE user (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);