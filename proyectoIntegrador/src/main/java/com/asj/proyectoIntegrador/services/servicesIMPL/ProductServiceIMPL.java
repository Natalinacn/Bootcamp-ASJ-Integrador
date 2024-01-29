package com.asj.proyectoIntegrador.services.servicesIMPL;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.asj.proyectoIntegrador.entities.Product;
import com.asj.proyectoIntegrador.exception.ResourceNotFoundException;
import com.asj.proyectoIntegrador.repositories.ProductRepository;
import com.asj.proyectoIntegrador.services.IProductService;

@Service
public class ProductServiceIMPL implements IProductService {

	@Autowired
	private ProductRepository productRepository;

	// Lista todos, eliminados y no eliminados
	@Override
	@Transactional(readOnly = true)
	public List<Product> listAllProducts() {
		return this.productRepository.findAll();
	}

	// Lista los no eliminados solamente, es el que debería ir en mi listado
	@Override
	@Transactional(readOnly = true)
	public List<Product> listProductsNotDeleted() {
		return this.productRepository.findAllProductByDeletedAtIsNullOrderByProductName();
	}

	@Override
	@Transactional(readOnly = true)
	public Product findProductById(Integer idProduct) throws Exception {
		if(idProduct != null) {
		Product product = this.productRepository.findById(idProduct).orElse(null);
		return product;
		}else {
			throw new Exception("Producto no encontrado con ID: " + idProduct);
		}
	}

		@Override
		@Transactional
		public void saveProduct(Product product) {
			product.setCreatedAt(LocalDate.now());
			this.productRepository.save(product);
		}

	@Override
	@Transactional
	public Product updateProduct(Integer idProduct, Product product) throws Exception {

		Product updatedProduct = productRepository.findById(idProduct).get();
		if (updatedProduct != null) {
			updatedProduct.setCode(product.getCode());
			updatedProduct.setProductName(product.getProductName());
			updatedProduct.setCategory(product.getCategory());
			updatedProduct.setProvider(product.getProvider());
			updatedProduct.setDescription(product.getDescription());
			updatedProduct.setPrice(product.getPrice());
			updatedProduct.setUpdatedAt(LocalDate.now());
			this.productRepository.save(updatedProduct);
			return updatedProduct;
		} else {
			throw new ResourceNotFoundException(idProduct);
		}
	}

	// Borrado físico
//	@Override
//	@Transactional
//	public void deleteProductById(Integer idProduct) {
//		this.productRepository.deleteById(idProduct);
//	}

	// Borrado lógico
	@Override
	@Transactional
	public void deleteProductById(Integer idProduct) throws Exception {
	    Product product = this.productRepository.findByIdProductAndDeletedAtNull(idProduct);
	    if (product != null) {
	        product.setDeletedAt(LocalDate.now());
	        this.productRepository.save(product);
	    } else {
	    	throw new ResourceNotFoundException(idProduct);
	    }
	}


}
