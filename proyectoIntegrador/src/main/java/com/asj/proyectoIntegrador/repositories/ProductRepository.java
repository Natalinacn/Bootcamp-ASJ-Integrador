package com.asj.proyectoIntegrador.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.asj.proyectoIntegrador.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{
	
	Product findByIdProductAndDeletedAtNull(Integer idProduct);
	
	List<Product> findAllProductByDeletedAtIsNullOrderByProductName();

}
