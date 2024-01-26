package com.asj.proyectoIntegrador.services.servicesIMPL;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.aspectj.weaver.patterns.ThisOrTargetAnnotationPointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.asj.proyectoIntegrador.entities.Category;
import com.asj.proyectoIntegrador.repositories.CategoryRepository;
import com.asj.proyectoIntegrador.repositories.ProductRepository;
import com.asj.proyectoIntegrador.services.ICategoryService;

@Service
public class CategoryServiceIMPL implements ICategoryService {

	private final CategoryRepository categoryRepository;
   
	private final ProductRepository productRepository;
    
    public CategoryServiceIMPL(CategoryRepository categoryRepository, ProductRepository productRepository) {
		this.categoryRepository = categoryRepository;
		this.productRepository = productRepository;
	}

	@Override
	@Transactional
	public void saveCategory(Category category) throws Exception{
		
		if (category.getCategory() != null) {
			
			category.setCreatedAt(LocalDate.now());
			
			this.categoryRepository.save(category);
			System.out.println(categoryRepository.findAll());
		} else {
			throw new Exception("No se pudo guardar la categoría");
		}
	}

	
	@Override
	@Transactional(readOnly = true)
	public List<Category> listAllCategories() throws Exception {
		
		List<Category> categoryList = this.categoryRepository.findAllByOrderByCategoryAsc();

		return categoryList;
	}


	@Override
	@Transactional
	public void deleteCategory(Integer categoryId) {
		// TODO Auto-generated method stub

	}

}
