package com.asj.proyectoIntegrador.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asj.proyectoIntegrador.entities.Category;
import com.asj.proyectoIntegrador.services.ICategoryService;

@RestController
@RequestMapping("categorias")
@CrossOrigin(origins = "http://localhost:4200") 
public class CategoryController {
	
	private ICategoryService iCategoryService;

	public CategoryController(ICategoryService iCategoryService) {
		this.iCategoryService = iCategoryService;
	}
	
	@GetMapping("/listado")
	public ResponseEntity<List<Category>> getCategories(){
		try {
			List<Category> categoriesList = this.iCategoryService.listAllCategories();
			return new ResponseEntity<>(categoriesList, HttpStatus.OK);
			
		}catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
	}
	
	
	@PostMapping("/crear")
	public ResponseEntity<Category> createCategory(@RequestBody Category category) {
		
		try {
		this.iCategoryService.saveCategory(category);
		return new ResponseEntity<>(category, HttpStatus.CREATED);
		
		}catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		
	}
	

}
