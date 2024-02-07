package com.asj.proyectoIntegrador.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asj.proyectoIntegrador.entities.Product;
import com.asj.proyectoIntegrador.services.IProductService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("productos")
@CrossOrigin(origins = "http://localhost:4200") // Permite peticiones desde el puerto 4200 de angular al 8080 de spring
public class ProductController {

	private IProductService iProductService;

	public ProductController(IProductService iProductService) {
		this.iProductService = iProductService;
	}

	// http://localhost:8080/productos/listado
	// Traigo los productos que no estan eliminados ACTIVOS
	@GetMapping("/listado")
	public ResponseEntity<List<Product>> getActivatedProducts() {
		List<Product> products = this.iProductService.listProductsNotDeleted();
		return new ResponseEntity<>(products, HttpStatus.OK);

	}
	
	@GetMapping("/listadoTotal")
	public ResponseEntity<List<Product>> getAllProducts() {
		List<Product> products = this.iProductService.listAllProducts();
		return new ResponseEntity<>(products, HttpStatus.OK);
	}
	
	//Traigo los eliminados
	
	@GetMapping("/listadoEliminados")
	public ResponseEntity<List<Product>> getDeletedProducts() {
		List<Product> products = this.iProductService.listProductsDeleted();
		return new ResponseEntity<>(products, HttpStatus.OK);
	}

	@GetMapping("/{idProduct}")
	public ResponseEntity<Product> getProductById(@PathVariable Integer idProduct) {
		try {
			Product product = iProductService.findProductById(idProduct);
			return new ResponseEntity<>(product, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/cantidad")
	public ResponseEntity<Integer> getTotalProductCount() {
		try {
			Integer productQuantity = iProductService.getTotalProductCount();
			return new ResponseEntity<Integer>(productQuantity, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Integer>(HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping("/proveedor/{idProvider}")
	public ResponseEntity<List<Product>> getProductsByProvider(@PathVariable Integer idProvider) {

		List<Product> productsList = iProductService.findProductByProvider(idProvider);
		return new ResponseEntity<List<Product>>(productsList, HttpStatus.OK);

	}

	@PostMapping("/formulario")
	public ResponseEntity<Product> createProduct(@Valid @RequestBody Product product) {
		try {
			iProductService.saveProduct(product);
			return new ResponseEntity<>(product, HttpStatus.OK);
		} catch (Exception e) {
			e.getStackTrace();
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}

	@DeleteMapping("/{idProduct}")
	public ResponseEntity<?> deleteProduct(@PathVariable Integer idProduct) {
		try {
			iProductService.deleteProductById(idProduct);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PutMapping("/actualizar/{idProduct}")
	public ResponseEntity<Product> updateProduct(@PathVariable Integer idProduct, @Valid @RequestBody Product product) {
		try {
			iProductService.updateProduct(idProduct, product);
			return new ResponseEntity<>(product, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
