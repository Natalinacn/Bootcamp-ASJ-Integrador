package com.asj.proyectoIntegrador.services;

import java.util.List;

import com.asj.proyectoIntegrador.entities.Product;
import com.asj.proyectoIntegrador.entities.Provider;

public interface IProductService {

	public List<Product> listAllProducts();

	public Product findProductById(Integer idProduct) throws Exception;

	public void saveProduct(Product product);

	public void deleteProductById(Integer idProduct) throws Exception;

	Product updateProduct(Integer idProduct, Product product) throws Exception;

	List<Product> listProductsNotDeleted();
	
	

}
