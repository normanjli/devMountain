INSERT INTO artist(name)
Values('The Once Overs'),
    ('King Gizzard and the Lizard Wizards'),
    ('White Stripes');

SELECT * FROM artist
ORDER BY name DESC
LIMIT 10;

SELECT * FROM artist
ORDER BY name
LIMIT 5;

SELECT * FROM artist
WHERE name LIKE 'Black%';

SELECT * FROM artist
WHERE name LIKE '%Black%';

