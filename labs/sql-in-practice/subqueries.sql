SELECT * FROM invoice
WHERE invoice_id in(
    select * from invoice_line
    where unit_price >.99
)
