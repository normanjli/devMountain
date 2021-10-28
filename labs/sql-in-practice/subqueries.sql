SELECT * FROM invoice
WHERE invoice_id in(
    select invoice_id from invoice_line
    where unit_price >.99
)

SELECT name FROM track
where track_id in(
    select track_id from playlist_track
    where playlist_id in(
        Select playlist_id from playlist
        where name = 'Music'
    )
);

SELECT name from track
where track_id in(
    select track_id from playlist_track
    where playlist_id = 5
);

Select * from track
where genre_id in(
    Select genre_id from genre
    where name = 'Comedy'
);

SELECT * from track
where album_id in(
    select album_id from album
    where title = 'Fireball'
);

SELECT * from track
where album_id in(
    select album_id from album
    where artist_id in(
        SELECT artist_id FROM artist
        where name = 'Queen'
    )
);