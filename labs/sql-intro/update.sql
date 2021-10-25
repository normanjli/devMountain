UPDATE customer
SET fax = null
where fax is not null;

UPDATE customer
SET company = 'Self'
where company = null;

UPDATE customer
SET last_name = 'Thompson'
WHERE first_name = 'Julia' AND last_name='Barnett';

UPDATE customer
SET support_rep_id = 4
where email = 'luisrojas@yahoo.cl';

UPDATE track
set composer = 'The darkness around us'
where genre_id = 3 AND composer is null;

