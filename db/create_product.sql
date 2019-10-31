-- This sql file will be responsible for creating a new product using four parameters. 

INSERT INTO product ( name, description, price, image_url ) 
-- VALUES ( ${name}, ${description}, ${price}, ${image_url} );
VALUES ( $1, $2, $3, $4 );