CREATE TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    age INTEGER,
    height INTEGER,
    city VARCHAR(50),
    favorite_color VARCHAR(20) 
    );
INSERT INTO person(age,name , height, city,favorite_color)
    VALUES(22,'Adrain',150,'Ogden','blue'),
        (23,'Spencer',130,'Provo','red'),
        (25,'Norman',140,'Murray','orange'),
        (35,'Andrew',200,'Austin','red'),
        (1000,'Elon',100,'Space','yellow');
SELECT * FROM person
ORDER BY height desc;

SELECT * FROM person
ORDER BY height asc;

SELECT * FROM person
ORDER BY age desc;

SELECT * FROM person
WHERE age>20;

SELECT * FROM person
WHERE age=18;

SELECT * FROM person
WHERE age<20 OR age>30;

SELECT * FROM person
WHERE age<>27;

SELECT * FROM person
WHERE favorite_color<>'red';

SELECT * FROM person
WHERE favorite_color<>'blue' AND favorite_color<>'red';

SELECT * FROM person
WHERE favorite_color='orange' or favorite_color='green';

SELECT * FROM person
WHERE favorite_color IN('orange','green','blue');

SELECT * FROM person
WHERE favorite_color IN('yellow','purple');