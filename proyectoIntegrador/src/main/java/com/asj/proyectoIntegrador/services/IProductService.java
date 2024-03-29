package com.asj.proyectoIntegrador.services;

import java.util.List;

import com.asj.proyectoIntegrador.entities.Product;

public interface IProductService {

	public List<Product> listAllProducts();

	public Product findProductById(Integer idProduct) throws Exception;

	public void saveProduct(Product product) throws Exception;

	public void deleteProductById(Integer idProduct) throws Exception;

	Product updateProduct(Integer idProduct, Product product) throws Exception;

	List<Product> listProductsNotDeleted();

	Integer getTotalProductCount() throws Exception;

	List<Product> findProductByProvider(Integer idProvider);

	List<Product> listProductsDeleted();

}
