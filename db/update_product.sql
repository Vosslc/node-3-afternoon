-- This sql file will be responsible for updating the description of a product by ID.
-- To update data from a database we use the following syntax: UPDATE Table SET column1 = value1 WHERE condition

UPDATE product SET description = $2 WHERE product_id = $1;

