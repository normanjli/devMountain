CREATE TABLE orders(
    order_id SERIAL PRIMARY KEY,
    person_id INTEGER,
    product_name VARCHAR(200),
    product_price FLOAT,
    quantity INTEGER
);
INSERT INTO orders(person_id,product_name,product_price,quantity)
    VALUES(1,'stuff n things',69.42,42),
        (2,'axe',75.00,50),
        (1,'brush',50.00,5),
        (2,'cups',5.00,10),
        (2,'dog',1020,1);

SELECT * FROM orders;

SELECT SUM(quantity) FROM orders;

SELECT SUM(product_price*quantity) from orders;

SELECT SUM(product_price*quantity),person_id from orders
GROUP BY person_id;

