CREATE DATABASE proyectoIntegradorFinal;

USE proyectoIntegradorFinal;

CREATE TABLE product_categories (
        id_product_category INT NOT NULL PRIMARY KEY IDENTITY (1, 1),
        category VARCHAR(50) NOT NULL,
        created_at DATETIME DEFAULT GETDATE() NOT NULL,
        updated_at DATETIME NULL
    );

CREATE TABLE industries (
        id_industry INT NOT NULL PRIMARY KEY IDENTITY (1, 1),
        industry VARCHAR(50) NOT NULL,
        created_at DATETIME DEFAULT GETDATE() NOT NULL,
        updated_at DATETIME NULL
    );

CREATE TABLE iva_conditions (
        id_iva_condition INT NOT NULL PRIMARY KEY IDENTITY (1, 1),
        iva_condition VARCHAR(100) NOT NULL,
        created_at DATETIME DEFAULT GETDATE() NOT NULL,
        updated_at DATETIME NULL
    );

CREATE TABLE countries (
        id_country int NOT NULL PRIMARY KEY IDENTITY (1, 1),
        country varchar(100) NOT NULL,
    );

CREATE TABLE provinces (
        id_province int NOT NULL PRIMARY KEY IDENTITY (1, 1),
        province varchar(50) NOT NULL,
        id_country INT NOT NULL,
        FOREIGN KEY (id_country) REFERENCES countries (id_country),
    );

CREATE TABLE cities (
        id_city int NOT NULL PRIMARY KEY IDENTITY (1, 1),
        city varchar(50) NOT NULL,
        id_province INT NOT NULL,
        FOREIGN KEY (id_province) REFERENCES provinces (id_province),
    );

CREATE TABLE addresses (
        id_address int NOT NULL PRIMARY KEY IDENTITY (1, 1),
        address_street varchar(50) NOT NULL,
        address_number int NOT NULL,
        zip_code VARCHAR(20),
        id_city int NOT NULL,
        FOREIGN KEY (id_city) REFERENCES cities (id_city),
        created_at DATETIME DEFAULT GETDATE() NOT NULL,
        updated_at DATETIME NULL
    );

CREATE TABLE responsible_persons (
        id_responsible_person INT NOT NULL PRIMARY KEY IDENTITY (1, 1),
        responsible_name VARCHAR(50) NOT NULL,
        responsible_lastname VARCHAR(50) NOT NULL,
        responsible_phone VARCHAR(50) NOT NULL,
        responsible_email VARCHAR(50),
        responsible_rol VARCHAR(50),
        created_at DATETIME DEFAULT GETDATE() NOT NULL,
        updated_at DATETIME NULL
    );

CREATE TABLE providers (
        id_provider INT NOT NULL PRIMARY KEY IDENTITY (1, 1),
        provider_code VARCHAR(100) NOT NULL,
        company_name VARCHAR(100) NOT NULL,
        cuit VARCHAR(20) NOT NULL,
        phone VARCHAR(50),
        website VARCHAR(100),
        id_industry INT NOT NULL,
        id_address INT NOT NULL,
        id_iva_condition INT NOT NULL,
        id_responsible_person INT NOT NULL,
        FOREIGN KEY (id_industry) REFERENCES industries (id_industry),
        FOREIGN KEY (id_address) REFERENCES addresses (id_address),
        FOREIGN KEY (id_iva_condition) REFERENCES iva_conditions (id_iva_condition),
        FOREIGN KEY (id_responsible_person) REFERENCES responsible_persons (id_responsible_person),
        created_at DATETIME DEFAULT GETDATE() NOT NULL,
        updated_at DATETIME NULL
    );

CREATE TABLE products (
        id_product INT NOT NULL PRIMARY KEY IDENTITY (1, 1),
        product_code VARCHAR(50) NOT NULL,
        product_name VARCHAR(100) NOT NULL,
        product_description TEXT,
        product_price FLOAT NOT NULL,
		product_img VARCHAR(255),
        id_product_category INT NOT NULL,
        id_provider INT NOT NULL,
        FOREIGN KEY (id_product_category) REFERENCES product_categories (id_product_category),
        FOREIGN KEY (id_provider) REFERENCES providers (id_provider),
        created_at DATETIME DEFAULT GETDATE() NOT NULL,
        updated_at DATETIME NULL
    );

CREATE TABLE purchase_orders (
        id_purchase_order INT NOT NULL PRIMARY KEY IDENTITY (1, 1),
        order_number INT NOT NULL,
        order_issue_date DATETIME DEFAULT GETDATE () NOT NULL,
        delivery_date DATETIME NOT NULL,
        reception_info TEXT,
        total_order FLOAT,
        status BIT,
        id_provider INT NOT NULL,
        FOREIGN KEY (id_provider) REFERENCES providers (id_provider),
        created_at DATETIME DEFAULT GETDATE() NOT NULL,
        updated_at DATETIME NULL
    );

CREATE TABLE order_details (
        id_order_detail INT NOT NULL PRIMARY KEY IDENTITY (1, 1),
        quantity INT NOT NULL,
        price FLOAT NOT NULL,
        id_product INT NOT NULL,
        id_purchase_order INT NOT NULL,
        FOREIGN KEY (id_product) REFERENCES products (id_product),
        FOREIGN KEY (id_purchase_order) REFERENCES purchase_orders (id_purchase_order),
        created_at DATETIME DEFAULT GETDATE() NOT NULL,
        updated_at DATETIME NULL
    );


--INSERTS

--COUNTRIES
INSERT INTO countries (country)
VALUES 
	('Argentina'), 
	('Brasil'), 
	('Chile'), 
	('Uruguay'), 
	('Paraguay');


-- PROVINCES
--Provincias de Argentina
INSERT INTO provinces (province, id_country)
VALUES ('La Rioja', 1), ('Buenos Aires', 1), ('Catamarca', 1), ('Chaco', 1), ('Chubut', 1), 
       ('Córdoba', 1), ('Corrientes', 1), ('Entre Ríos', 1), ('Formosa', 1), ('Jujuy', 1), 
       ('La Pampa', 1), ('Mendoza', 1), ('Misiones', 1), ('Neuquén', 1), ('Río Negro', 1), 
       ('Salta', 1), ('San Juan', 1), ('San Luis', 1), ('Santa Cruz', 1), ('Santa Fe', 1), 
       ('Santiago del Estero', 1), ('Tierra del Fuego', 1), ('Tucumán', 1);

-- Provincias de Brasil
INSERT INTO provinces (province, id_country)
VALUES 
    ('Brasilia', 2),
    ('Sao Paulo', 2),
    ('Rio de Janeiro', 2),
    ('Salvador', 2),
    ('Belo Horizonte', 2);

-- Provincias de Chile
INSERT INTO provinces (province, id_country)
VALUES 
    ('Santiago', 3),
    ('Valparaíso', 3),
    ('Concepción', 3),
    ('Antofagasta', 3),
    ('Puerto Montt', 3);


-- CITIES
-- La Rioja
INSERT INTO cities (city, id_province) 
VALUES 
	('La Rioja Ciudad', 1), 
	('Chilecito', 1), 
	('Aimogasta', 1);

-- Buenos Aires
INSERT INTO cities (city, id_province) 
VALUES 
	('Mar del Plata', 2), 
	('La Plata', 2), 
	('Tigre', 2);

-- Córdoba
INSERT INTO cities (city, id_province) 
VALUES 
	('Córdoba Capital', 6), 
	('Villa María', 6), 
	('Río Cuarto', 6);


INSERT INTO product_categories (category)
VALUES
    ('Celulares'),
    ('Tablets'),
    ('Laptops'),
    ('Panadería'),
    ('Carnes'),
    ('Calzado'),
    ('Ropa deportiva'),
    ('Herramientas');

INSERT INTO industries (industry)
VALUES
    ('Informática'),
    ('Alimentos'),
    ('Moda'),
    ('Juguetes'),
    ('Construcción');

INSERT INTO iva_conditions (iva_condition)
VALUES
    ('IVA Responsable Inscripto'),
    ('IVA Responsable no Inscripto'),
    ('IVA no Responsable'),
    ('IVA Sujeto Exento'),
    ('Consumidor Final'),
    ('Responsable Monotributo'),
    ('Sujeto no Categorizado'),
    ('Proveedor del Exterior'),
    ('Cliente del Exterior'),
    ('IVA Liberado – Ley Nº 19.640'),
    ('IVA Responsable Inscripto – Agente de Percepción'),
    ('Pequeño Contribuyente Eventual'),
    ('Monotributista Social'),
    ('Pequeño Contribuyente Eventual Social');

-- ADDRESSES
INSERT INTO addresses (address_street, address_number, zip_code, id_city)
VALUES 
    ('Espora', '255', '4545', 1),
    ('Aconcagua', '855', '6000', 2),
    ('León Pinelo', '5', '5000', 5),
    ('Martin Coronado', '85', '5010', 6),
    ('Alt Brown', '2565', '1648', 8),
    ('Av. Fuerza Aérea', '2800', '5011', 9);



	--Responsible persons
INSERT INTO responsible_persons (
    responsible_name,
    responsible_lastname,
    responsible_phone,
    responsible_email,
    responsible_rol
)
VALUES ('John', 'Doe', '555-555-1234', 'john.doe@example.com', 'Software Developer'),
       ('Alice', 'Smith', '555-555-5678', 'alice.smith@example.com', 'Marketing Specialist'),
       ('Robert', 'Johnson', '555-555-9876', 'robert.johnson@example.com', 'Financial Analyst'),
       ('Emily', 'Williams', '555-555-4321', 'emily.williams@example.com', 'HR Manager'),
       ('Samantha', 'Johnson', '555-555-1234', 'samantha.j@example.com', 'Software Engineer');


INSERT INTO providers (
    provider_code,
    company_name,
    cuit,
    phone,
    website,
    id_industry,
    id_address,
    id_iva_condition,
    id_responsible_person
)
VALUES
    ('PROV001', 'Tech Suppliers', '30-12345678-9', '555-123-4567', 'www.techsuppliers.com', 1, 1, 1, 4),
    ('PROV002', 'Fashion Materials', '30-98765432-1', '555-987-6543', 'www.fashionmaterials.com', 3, 2, 2, 3),
    ('PROV003', 'US Foods', '30-55555555-6', '555-789-0123', 'www.usfoods.com', 2, 3, 3, 2),
    ('PROV004', 'Playful Wonders Toys', '30-11112222-3', '555-456-7890', 'www.playfulwonderstoys.com', 4, 4, 4, 1),
	('PROV005', 'NorthStar Builders', '30-11118888-4', '555-987-4852', 'www.northstarbuilders.com', 5, 5, 1, 5);



	--PRODUCTS
INSERT INTO products (
    product_code,
    product_name,
    product_description,
    product_price,
	product_img,
    id_product_category,
    id_provider
)
VALUES ('P001', 'Laptop', 'Laptop potente con especificaciones de alto rendimiento', 615999.00, 'https://medias.musimundo.com/medias/size515-149355-01.jpg?context=bWFzdGVyfGltYWdlc3w3NDk4MXxpbWFnZS9qcGVnfGhjYy9oNmYvMTA1MjI2MTUwODcxMzQvc2l6ZTUxNV8xNDkzNTVfMDEuanBnfDVhZGJhYjZiNDhlNmQ1YzgxZjRkNWM5MzVkYTM2MTZlYmQ1Nzg2NjMxYmU3YTJiZDAyNDY0NDAyODMxYzMxYmE', 3, 1),
       ('P002', 'Remera', 'Camiseta de algodón en varios colores y tallas', 5000.00, NULL, 7, 2),
       ('P003', 'Celular', 'Teléfono inteligente con funciones avanzadas', 500000.00, NULL,1, 1),
       ('P004', 'Zapatillas Deportivas', 'Zapatillas cómodas para actividades deportivas', 100000.00, 'https://rossettiar.vtexassets.com/arquivos/ids/315304-800-auto?v=638108716302400000&width=800&height=auto&aspect=true', 6, 2),
       ('P005', 'Martillo Demoledor', 'Velocidad de impacto de 1800 golpes por minuto', 300000.00, NULL, 8, 4),
	   ('P006', 'Tablet Samsung Galaxy', '8.7 32gb + 3gb Ram Wifi Color Plateado', 220000.00, NULL, 2, 1),
	   ('P007', 'Calzas Mujer', 'Nike Epic Fast Negro', 75500.00, NULL, 7, 2),
	   ('P008', 'Short Entrenamiento', 'Lotto Active Hombre. Color Azul', 17999.00, NULL, 7, 2),
	   ('P009', 'Malla Deportiva', 'Resistente al cloro', 26400.00, NULL, 7, 2),
	   ('P010', 'Soldadora Inverter', 'Tipo de soldadora: TIG.', 140000.00, NULL, 8, 4);



	   --PURCHASE ORDERS
INSERT INTO purchase_orders (
    order_number,
    delivery_date,
    reception_info,
    total_order,
    status,
    id_provider
)
VALUES
    (123456, '2024-01-19', 'Entregar en la puerta principal', 200000.00, 1, 2),
    (789012, '2024-01-15', 'Dejar en la recepción', 1847997.00, 1, 1),
    (345678, '2024-01-20', 'Llamar antes de la entrega', 5000.00, 0, 2),
    (111222, '2024-01-12', 'Dejar en la portería', 2000000.00, 1, 1),
    (333444, '2024-01-18', 'Entregar en el almacén', 900000.00, 1, 4),
	(555666, '2024-01-29', 'Entregar al encargado', 280000.00, 1, 4);


	--ORDER_DETAILS
INSERT INTO
    order_details (quantity, price, id_product, id_purchase_order)
VALUES
    (2, 100000.00, 4, 1),
    (3, 615999.00, 1, 2),
    (1, 5000.00, 2, 3),
    (4, 500000.00, 3, 4),
    (3, 300000.00, 5, 5),
	(2, 140000.00, 10, 6);
