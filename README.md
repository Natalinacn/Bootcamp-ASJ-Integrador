# Proyecto Integrador Final

### Índice

[Descripción del proyecto](#descripción_proyecto)

[Características y tecnologias de la aplicación](#características_y_tecnologías_de_la_aplicación)

[¿Cómo ejecutar localmente?](#ejecución_local)

[Aclaraciones Login](#aclaraciones_sobre_**login**)

[Persona desarrolladora](#desarrollador)


## Descripción_Proyecto

Desarrollo de un *Sistema de Gestión Compras* para manejar información de Proveedores, Productos y Órdenes de compra simplificando la administración de los inventarios.

## Características_y_tecnologías_de_la_aplicación
- **Dependencias**:
	- Spring Web
	- MS SQLServer Driver
	- Spring Boot Starter Data JPA
	- Spring Boot Devtools 
	- Validation
-
- **Tecnología Frontend**    
    - Angular con TypeScript
    
- **Tecnología Backend**   
    - Java 21
    - Spring Boot
    
- **Tecnología base de datos**   
    - SQLServer

## Ejecución_local

Pasos necesarios para correr el proyecto localmente

- Crear una base de datos llamada integradorAsj
```sql
  CREATE DATABASE integradorAsj;
```

- Correr el proyecto SpringBoot para que se creen las tablas automáticamente

- Desde sqlServer seleccionar mi base de datos
```sql
USE integradorAsj;
```

- Insertar **Países**

```sql
INSERT INTO country (country)
VALUES 
	('Argentina'), 
	('Brasil'), 
	('Chile'), 
	('Uruguay'), 
	('Paraguay');

```

- Insertar  **Provincias**

```sql
	--Provincias de Argentina
INSERT INTO province (province, country_id)
VALUES ('La Rioja', 1), ('Buenos Aires', 1), ('Catamarca', 1), ('Chaco', 1), ('Chubut', 1), 
       ('Córdoba', 1), ('Corrientes', 1), ('Entre Ríos', 1), ('Formosa', 1), ('Jujuy', 1), 
       ('La Pampa', 1), ('Mendoza', 1), ('Misiones', 1), ('Neuquén', 1), ('Río Negro', 1), 
       ('Salta', 1), ('San Juan', 1), ('San Luis', 1), ('Santa Cruz', 1), ('Santa Fe', 1), 
       ('Santiago del Estero', 1), ('Tierra del Fuego', 1), ('Tucumán', 1);
       
-- Provincias de Brasil
INSERT INTO province (province, country_id)
VALUES 
    ('Brasilia', 2),
    ('Sao Paulo', 2),
    ('Rio de Janeiro', 2),
    ('Salvador', 2),
    ('Belo Horizonte', 2);

-- Provincias de Chile
INSERT INTO province (province, country_id)
VALUES 
    ('Santiago', 3),
    ('Valparaíso', 3),
    ('Concepción', 3),
    ('Antofagasta', 3),
    ('Puerto Montt', 3);       
       
```

- Insertar **Condiciones de Iva**
```sql
INSERT INTO iva_condition (iva_condition)
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
```

- Insertar algunas **Categorías** (Puede hacerse desde el FRONT o inserts a continuación)
```sql
	INSERT INTO category (category)
VALUES
    ('Celulares'),
    ('Tablets');
```

- Insertar algunos Rubros (Puede hacerse desde el FRONT o inserts a continuación)
```sql
	INSERT INTO industry (industry)
VALUES
    ('Informática'),
    ('Electrodomésticos');
```


- Ejecutar el servidor de Angular (*puerto 4200*)

```bash
  ng serve -o
```

- Ejecutar el servidor de Java (*puerto 8080*)

## Aclaraciones_sobre_**Login**

La primer pantalla es el **Login**, se deberá ingresar con el siguiente usuario y contraseña:

```
Email: usuario@gmail.com
Password: Pass123$
```


- Insertar algunos **Proveedores** desde el FRONT

- Insertar algunos **Productos** desde el FRONT

- Insertar algunas **Ordenes de Compra** desde el FRONT


## Desarrollador:

Este proyecto fue desarrollado por: **Natalin Acuña** en el marco del BootCamp de ASJ.
