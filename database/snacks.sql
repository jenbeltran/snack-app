CREATE DATABASE snacks;

USE snacks;

CREATE TABLE IF NOT EXISTS snacks (
id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR (100) NOT NULL DEFAULT '',
country VARCHAR(100) NOT NULL DEFAULT '',
continent VARCHAR(100) NOT NULL DEFAULT '',
photo VARCHAR(255) NOT NULL DEFAULT '',
favourite BOOLEAN NOT NULL DEFAULT 0
); 

INSERT INTO snacks (name, country, continent, photo, favourite) VALUES
("Coffee Crisp", "Canada", "North America", "https://americanfizz.co.uk/image/cache/catalog/canadian-products/coffee-crisp/nestle-coffee-crisp-50g-48ct-800x800.png", 1),
("Pocky", "Japan", "Asia", "http://www.grocery.com/store/image/cache/catalog/pocky/pocky-biscuit-stick-6-flavor-variety-pack-pack-of--B01D0NNQ3G-500x500.jpg", 1),
("Wispa", "United Kingdom", "Europe", "https://jlbrooks.co.uk/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/1/2/12607.png", 1),
("Tortrix Lime", "Guatemala", "Central America", "https://d1ql6nygpmad1t.cloudfront.net/media/catalog/product/cache/2b4d21b90ad5abb98380bc0a709a4ac8/b/a/base_0721282300113.jpg", 0),
("Mayte Plantain Chips", "Colombia", "South America", "https://latinfood.com/wp-content/uploads/sites/10/2016/01/TDC_0013_Mayte_PlantainChips_Lemon.jpg", 0),
("Tim Tam", "Australia", "Oceania", "https://www.rockpopcandy.co.uk/wp-content/uploads/2018/01/208459011_0_640x640.jpg", 0);