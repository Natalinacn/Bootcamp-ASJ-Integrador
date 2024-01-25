package com.asj.proyectoIntegrador.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.asj.proyectoIntegrador.entities.Product;

public interface ProductRepository extends JpaRepository<Product, Integer>{
	
	Product findByIdProductAndDeletedAtNull(Integer idProduct);
	
	List<Product> findAllProductByDeletedAtIsNull();

}
