CREATE DATABASE snacks;

USE snacks;

CREATE TABLE IF NOT EXISTS snacks (
id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR (100) NOT NULL DEFAULT '',
country VARCHAR(100) NOT NULL DEFAULT '',
continent VARCHAR(100) NOT NULL DEFAULT ''
); 

INSERT INTO snacks (name, country, continent) VALUES
("Coffee Crisp", "Canada", "North America"),
("Pocky", "Japan", "Asia"),
("Wispa", "Great Britain", "Europe"),
("Tortrix Lime", "Guatemala", "Central America"),
("Chocochitas", "Venezuela", "South America"),
("Tim Tam", "Australia", "Oceania");