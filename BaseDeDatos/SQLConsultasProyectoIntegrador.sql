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
JOIN responsible_persons rp ON pr.id_responsible_person = rp.id_responsible_person
ORDER BY pr.company_name ASC, pr.provider_code, pr.created_at ASC;


/*6-Obtener razon social, codigo proveedor, imagen, web, email, teléfono y los datos del contacto del 
proveedor con más ordenes de compra cargadas.*/

SELECT pr.provider_code AS 'Código proveedor', pr.company_name AS 'Razon Social', pr.created_at AS 'Fecha de alta del proveedor', pr.phone AS 'Teléfono', ISNULL(pr.email, '-') AS 'Email', pr.website AS 'Sitio Web', CONCAT(rp.responsible_name, ' ', rp.responsible_lastname) AS 'Persona Responsable', rp.responsible_phone AS 'Teléfono responsable', rp.responsible_email AS 'Mail responsable', rp.responsible_rol AS 'Rol responsable'
FROM providers pr
JOIN responsible_persons rp ON pr.id_responsible_person = rp.id_responsible_person
WHERE pr.id_provider = (
    SELECT TOP 1 po.id_provider
    FROM purchase_orders po
    GROUP BY po.id_provider
    ORDER BY COUNT(po.id_purchase_order) DESC
);

/*7-Mostrar la fecha emisión, nº de orden, razon social y codigo de proveedor, y la cantidad de productos de 
cada orden.*/

SELECT pu.order_issue_date AS 'Orden de emisión', pu.order_number AS 'Número de órden', pr.provider_code AS 'Córdigo proveedor', pr.company_name AS 'Razón social', COUNT(id_product) AS 'Cantidad de productos'
FROM purchase_orders pu
JOIN providers pr ON pu.id_provider = pr.id_provider
JOIN order_details od ON pu.id_purchase_order = od.id_purchase_order
GROUP BY pu.order_number, pu.order_issue_date, pr.provider_code, pr.company_name
ORDER BY pu.order_number;

/*8-En el listado anterior, diferenciar cuando una orden está Cancelada o no, y el total de la misma.*/

SELECT pu.order_issue_date AS 'Orden de emisión', pu.order_number AS 'Número de órden', pr.provider_code AS 'Córdigo proveedor', pr.company_name AS 'Razón social', sum(od.id_product * od.quantity) AS 'Cantidad de productos', pu.status AS 'Estado', pu.total_order AS 'Total'
FROM purchase_orders pu
JOIN providers pr ON pu.id_provider = pr.id_provider
JOIN order_details od ON pu.id_purchase_order = od.id_purchase_order
GROUP BY pu.order_number, pu.order_issue_date, pr.provider_code, pr.company_name, pu.status, pu.total_order
ORDER BY pu.order_number;


/*9-Mostrar el detalle de una orden de compra del proveedor 3, trayendo: SKU del producto, nombre producto, 
cantidad y subtotal.*/

SELECT p.product_code AS 'SKU producto', p.product_name AS 'Nombre del producto', od.quantity AS 'Cantidad', (od.quantity * od.price) AS 'Subtotal'
FROM order_details od
JOIN products p ON od.id_product = p.id_product
JOIN purchase_orders po ON od.id_purchase_order = po.id_purchase_order
WHERE po.id_provider = 3;



/*10-Cambiar el estado a Cancelada y la fecha de modificación a la orden de compra con ID = 4.*/

UPDATE purchase_orders
SET status = 0,
updated_at = GETDATE()
WHERE id_purchase_order = 4;


/*11-Escribir la sentencia para eliminar el producto con id = 1 (NO EJECUTAR, SÓLO MOSTRAR SENTENCIA)*/

DELETE FROM products
WHERE id_product = 1;



