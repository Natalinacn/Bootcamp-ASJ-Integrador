package com.asj.proyectoIntegrador.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.asj.proyectoIntegrador.entities.Product;
import com.asj.proyectoIntegrador.repositories.ProductRepository;
import com.asj.proyectoIntegrador.services.IProductService;
import com.asj.proyectoIntegrador.services.servicesIMPL.ProductServiceIMPL;

@RestController
@RequestMapping("productos")
@CrossOrigin(origins = "http://localhost:4200") // Permite peticiones desde el puerto 4200 de angular al 8080 de spring
public class ProductController {

//	private ProductServiceIMPL productServiceIMPL;
//
//	public ProductController(ProductServiceIMPL productServiceIMPL) {
//		this.productServiceIMPL = productServiceIMPL;
//	}
	
	private IProductService iProductService;
	public ProductController(IProductService iProductService) {
	this.iProductService = iProductService;
}

	// http://localhost:8080/productos/listado
	//Traigo los productos que no estan eliminados
	@GetMapping("/listado")
	public ResponseEntity<List<Product>> getProducts() {
		List<Product> products = this.iProductService.listProductsNotDeleted();
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

	@PostMapping("/formulario")
	public ResponseEntity<Product> createProduct(@RequestBody Product product) {

		iProductService.saveProduct(product);

		return new ResponseEntity<>(product, HttpStatus.OK);
	}

	@DeleteMapping("/{idProduct}")
	public ResponseEntity<?> deleteProduct(@PathVariable Integer idProduct) {
		try {
		iProductService.deleteProductById(idProduct);
		return new ResponseEntity<>(HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping("/actualizar/{idProduct}")
	public ResponseEntity<Product> updateProduct(@PathVariable Integer idProduct, @RequestBody Product product){
		
		try {
			iProductService.updateProduct(idProduct, product);
			return new ResponseEntity<>(product, HttpStatus.OK);
			
		}catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
}

