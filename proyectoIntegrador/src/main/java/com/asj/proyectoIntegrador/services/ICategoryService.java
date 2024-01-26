package com.asj.proyectoIntegrador.services;

import java.util.List;

import com.asj.proyectoIntegrador.entities.Category;

public interface ICategoryService {

	void saveCategory(Category category) throws Exception;

	List<Category> listAllCategories() throws Exception;

	void deleteCategory(Integer categoryId);
}
