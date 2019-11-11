-- This sql file will be responsible for deleting a specific product by ID. 
-- To delete data from a database we use the following syntax: DELETE FROM Table WHERE condition

DELETE FROM product 
WHERE product_id = $1;