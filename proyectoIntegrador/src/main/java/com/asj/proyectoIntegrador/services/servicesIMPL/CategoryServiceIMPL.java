package com.asj.proyectoIntegrador.services.servicesIMPL;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.asj.proyectoIntegrador.entities.Category;
import com.asj.proyectoIntegrador.repositories.CategoryRepository;
import com.asj.proyectoIntegrador.services.ICategoryService;

@Service
public class CategoryServiceIMPL implements ICategoryService {

	private final CategoryRepository categoryRepository;
		
	public CategoryServiceIMPL(CategoryRepository categoryRepository) {
		this.categoryRepository = categoryRepository;
	}

	@Override
	@Transactional
	public void saveCategory(Category category) throws Exception {

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
	public Category deleteCategory(Integer categoryId) throws Exception {
		Category deletedCategory = categoryRepository.findByCategoryIdAndDeletedAtNull(categoryId);

		if (deletedCategory != null) {
			deletedCategory.setDeletedAt(LocalDate.now());
			categoryRepository.save(deletedCategory);
			return deletedCategory;
		} else {
			throw new Exception("Error al eliminar la categoría " + deletedCategory.getCategory());
		}

	}

	@Override
	public Category updateCategory(Integer categoryId, Category category) throws Exception {
		Category updatedCategory = categoryRepository.findById(categoryId).get();

		if (updatedCategory != null) {
			updatedCategory.setCategory(category.getCategory());
			updatedCategory.setUpdatedAt(LocalDate.now());
			categoryRepository.save(updatedCategory);
			return updatedCategory;
		} else {
			throw new Exception("Error al editar la categoría");
		}
	}

}
