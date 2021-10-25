SELECT COUNT(billing_country) FROM invoice
WHERE billing_country='USA';

SELECT max(total) FROM invoice;

SELECT min(total) FROM invoice;

SELECT * FROM invoice
WHERE total>5;

SELECT COUNT(total) FROM invoice
WHERE total<5;

SELECT COUNT(billing_state) FROM invoice
WHERE billing_state IN ('CA', 'TX', 'AZ');

SELECT AVG(total) from invoice;

SELECT SUM(total) from invoice;

UPDATE invoice 
SET total = 24
WHERE invoice_id=5;

DELETE FROM invoice
where invoice_id= 1;