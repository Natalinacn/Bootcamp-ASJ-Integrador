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
		return productRepository.findAllProductByDeletedAtIsNullOrderByProductName();
	}

	// Lista los eliminados
	@Override
	@Transactional(readOnly = true)
	public List<Product> listProductsDeleted() {
		return productRepository.findAllProductByDeletedAtIsNotNullOrderByProductName();
	}

	@Override
	@Transactional(readOnly = true)
	public Product findProductById(Integer idProduct) throws Exception {
		if (idProduct != null) {
			Product product = productRepository.findById(idProduct).orElse(null);
			return product;
		} else {
			throw new Exception("Producto no encontrado con ID: " + idProduct);
		}
	}

	@Override
	@Transactional
	public void saveProduct(Product product) throws Exception {

		if (productRepository.existsByCode(product.getCode())) {
			throw new Exception("El código del producto ya existe");
		} else {
			product.setCreatedAt(LocalDate.now());
			productRepository.save(product);
		}
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
			updatedProduct.setImg(product.getImg());
			updatedProduct.setDeletedAt(product.getDeletedAt());
			updatedProduct.setUpdatedAt(LocalDate.now());
			productRepository.save(updatedProduct);
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
			productRepository.save(product);
		} else {
			throw new ResourceNotFoundException(idProduct);
		}
	}

	@Override
	public Integer getTotalProductCount() throws Exception {
		Integer productsQuantity = productRepository.getTotalProductCount();
		if (productsQuantity >= 0) {
			return productsQuantity;
		} else {
			throw new Exception("No hay productos cargados");
		}
	}

	@Override
	public List<Product> findProductByProvider(Integer idProvider) {

		List<Product> productList = productRepository.findByProviderIdProvider(idProvider);
		return productList;
	}

}
