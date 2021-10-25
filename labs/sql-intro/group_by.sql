SELECT SUM(total),billing_state FROM invoice
GROUP BY billing_state;

SELECT AVG(milliseconds),album_id from track
GROUP BY album_id
ORDER BY AVG(milliseconds) asc;

SELECT COUNT(album_id) from album
where artist_id IN (8,22)
GROUP BY artist_id;