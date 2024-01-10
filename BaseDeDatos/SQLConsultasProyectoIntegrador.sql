USE proyectoIntegradorFinal;


/*1-Obtener todos los productos, mostrando nombre del producto, categoría, proveedor (razón social y 
codigo proveedor), precio.*/

SELECT p.product_name AS 'Nombre del producto', p.product_price AS 'Precio del producto',  pc.category AS 'Categoría', pr.provider_code AS 'Código proveedor', pr.company_name AS 'Razón Social' FROM product_categories pc
RIGHT JOIN products p ON pc.id_product_category = p.id_product_category
JOIN providers pr ON p.id_provider = pr.id_provider;


/*2-En el listado anterior, además de los datos mostrados, traer el campo imagen aunque el producto NO tenga 
una. Sino tiene imagen, mostrar "-".*/

SELECT p.product_name AS 'Nombre del producto', p.product_price AS 'Precio del producto',  ISNULL(p.product_img, '-')  AS 'Imagen del producto', pc.category AS 'Categoría', pr.provider_code AS 'Código proveedor', pr.company_name AS 'Razón Social' 
FROM product_categories pc
RIGHT JOIN products p ON pc.id_product_category = p.id_product_category
JOIN providers pr ON p.id_provider = pr.id_provider;


/*3-Mostrar los datos que se pueden modificar (en el front) del producto con ID = 2.*/

SELECT p.product_code AS 'Código del Producto', p.product_name AS 'Nombre del Producto', p.product_description AS 'Descripción', p.product_price AS 'Precio', ISNULL(p.product_img, '-') AS 'Imagen del producto', pc.category AS 'Categoría', pr.company_name AS 'Proveedor'
FROM products p
JOIN product_categories pc ON p.id_product_category = pc.id_product_category
JOIN providers pr ON p.id_provider = pr.id_provider
WHERE p.id_product = 2;

/*4-Listar todo los proveedores cuyo teléfono tenga la característica de Córdoba o que la provincia sea 
igual a alguna de las 3 con más proveedores.*/

--Actualicé proveedores para que tenga un tel con caracteristica de Córdoba
UPDATE providers
SET phone = '351-123-4567' 
WHERE id_provider = 1;

SELECT pr.company_name AS 'Proveedor', pr.phone AS 'Teléfono' FROM providers pr
WHERE phone LIKE '351%' OR phone LIKE '0351';

/*5-Traer un listado de todos los proveedores que no hayan sido eliminados , y ordenados por razon social, 
codigo proveedor y fecha en que se dió de alta ASC. De este listado mostrar los datos que correspondan con 
su tabla del front.*/

--AGREGO Columna email a proveedores
ALTER TABLE providers
ADD email VARCHAR(100);



SELECT pr.provider_code AS 'Código proveedor', pr.company_name AS 'Razon Social', pr.created_at AS 'Fecha de alta del proveedor', pr.phone AS 'Teléfono', ISNULL(pr.email, '-') AS 'Email', pr.website AS 'Sitio Web', CONCAT(rp.responsible_name, ' ', rp.responsible_lastname) AS 'Persona Responsable' 
FROM providers pr
JOIN responsible_persons rp ON pr.id_responsible_person = rp.id_responsible_person;


/*6-Obtener razon social, codigo proveedor, imagen, web, email, teléfono y los datos del contacto del 
proveedor con más ordenes de compra cargadas.*/

SELECT pr.provider_code AS 'Código proveedor', pr.company_name AS 'Razon Social', pr.created_at AS 'Fecha de alta del proveedor', pr.phone AS 'Teléfono', ISNULL(pr.email, '-') AS 'Email', pr.website AS 'Sitio Web', CONCAT(rp.responsible_name, ' ', rp.responsible_lastname) AS 'Persona Responsable' 
FROM providers pr
JOIN responsible_persons rp ON pr.id_responsible_person = rp.id_responsible_person;





/*7-Mostrar la fecha emisión, nº de orden, razon social y codigo de proveedor, y la cantidad de productos de 
cada orden.*/

/*8-En el listado anterior, diferenciar cuando una orden está Cancelada o no, y el total de la misma.*/

/*9-Mostrar el detalle de una orden de compra del proveedor 3, trayendo: SKU del producto, nombre producto, 
cantidad y subtotal.*/

/*10-Cambiar el estado a Cancelada y la fecha de modificación a la orden de compra con ID = 4.*/

/*11-Escribir la sentencia para eliminar el producto con id = 1 (NO EJECUTAR, SÓLO MOSTRAR SENTENCIA)*/






