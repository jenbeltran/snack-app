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
("Coffee Crisp", "United Kingdom", "Europe", "https://americanfizz.co.uk/image/cache/catalog/canadian-products/coffee-crisp/nestle-coffee-crisp-50g-48ct-800x800.png", 1),
("Pocky", "Japan", "Asia", "http://www.grocery.com/store/image/cache/catalog/pocky/pocky-biscuit-stick-6-flavor-variety-pack-pack-of--B01D0NNQ3G-500x500.jpg", 1),
("Wispa", "United Kingdom", "Europe", "https://jlbrooks.co.uk/media/catalog/product/cache/1/image/800x800/9df78eab33525d08d6e5fb8d27136e95/1/2/12607.png", 1),
("Tortrix Lime", "Guatemala", "Central America", "https://d1ql6nygpmad1t.cloudfront.net/media/catalog/product/cache/2b4d21b90ad5abb98380bc0a709a4ac8/b/a/base_0721282300113.jpg", 0),
("Mayte Plantain Chips", "Colombia", "South America", "https://latinfood.com/wp-content/uploads/sites/10/2016/01/TDC_0013_Mayte_PlantainChips_Lemon.jpg", 0),
("Tim Tam", "Australia", "Oceania", "https://www.rockpopcandy.co.uk/wp-content/uploads/2018/01/208459011_0_640x640.jpg", 0),
("Takis", "Mexico", "North America", "https://images-na.ssl-images-amazon.com/images/I/91dcWOjBccL._SL1500_.jpg", 0),
("Piazza Chocolate", "Panama", "Central America", "https://images-na.ssl-images-amazon.com/images/I/415ndadQOhL.jpg", 0),
("Kit Kat", "United Kingdom", "Europe", "https://www.londondrugs.com/on/demandware.static/-/Sites-londondrugs-master/default/dw5f8c0123/products/L6251102/large/L6251102.JPG", 0),
("Jet Chocolate", "Colombia", "South America", "https://tiaecuador.vteximg.com.br/arquivos/ids/162831-1000-1000/262733000.jpg?v=636947538761230000", 0),
("Hello Panda", "Japan", "Asia", "https://images-na.ssl-images-amazon.com/images/I/91jqHc0zZfL._SY550_.jpg", 0),
("Piattos", "Philippines", "Asia", "https://images-na.ssl-images-amazon.com/images/I/91UDL4R2UnL._SL1500_.jpg", 0),
("Cookie Time Chocolate Chunk", "New Zealand", "Oceania", "https://i.ebayimg.com/images/g/lpIAAOSwYIxX~qPE/s-l300.jpg", 0),
("Oreo", "United States", "North America", "https://images-na.ssl-images-amazon.com/images/I/513LGJisOgL.jpg", 0),
("Chips Ahoy Original", "United States", "North America", "https://www.jeancoutu.com/catalog-images/831092/viewer/0/christie-chips-ahoy-cookies-original-300-g.png", 0);
