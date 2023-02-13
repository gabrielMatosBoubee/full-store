CREATE DATABASE IF NOT EXISTS GamesData;

CREATE TABLE
    GamesData.products(
        product_id INT UNIQUE CASCADE,
        product_name VARCHAR(150),
        product_price FLOAT,
        product_description VARCHAR(800),
        discount_percent INT,
        PRIMARY KEY(product_id)
    ) engine = InnoDB;

CREATE TABLE
    GamesData.categories(
        category VARCHAR(150),
        category_id INT UNIQUE CASCADE,
        PRIMARY KEY(product_id)
    )
CREATE TABLE
    GamesData.product_category(
        product_id INT,
        category_id INT,
        CONSTRAINT PRIMARY KEY(product_id, category_id),
        Foreign Key (category_id) REFERENCES GamesData.categories(category_id),
        FOREIGN Key (product_id) REFERENCES GamesData.products(product_id)
    ) engine = InnoDB;