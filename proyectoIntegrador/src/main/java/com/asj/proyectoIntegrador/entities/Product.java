package com.asj.proyectoIntegrador.entities;

import java.time.LocalDate;
import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;


//
//@NoArgsConstructor //Genera un constructor vacio
//@AllArgsConstructor //Genera un constructor lleno
//@ToString //Método To String
//@Data //Para que se creen automaticamente los getters y setters

@Entity
public class Product {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idProduct;
	private String code;
	private String productName;
	@ManyToOne
	private Category category;
	@ManyToOne
	private Provider provider;
	private String description;
	private Double price;
	private LocalDate createdAt;
	private LocalDate updatedAt;
	private LocalDate deletedAt;
    
	public Product() {
	}


	public Product(Integer idProduct, String code, String productName, Category category,
			Provider provider, String description, Double price, LocalDate createdAt, LocalDate updatedAt,
			LocalDate deletedAt) {
		this.idProduct = idProduct;
		this.code = code;
		this.productName = productName;
		this.category = category;
		this.provider = provider;
		this.description = description;
		this.price = price;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.deletedAt = deletedAt;
	}


	public Integer getIdProduct() {
		return idProduct;
	}


	public void setIdProduct(Integer idProduct) {
		this.idProduct = idProduct;
	}


	public String getCode() {
		return code;
	}


	public void setCode(String code) {
		this.code = code;
	}


	public String getProductName() {
		return productName;
	}


	public void setProductName(String productName) {
		this.productName = productName;
	}


	public Category getCategory() {
		return category;
	}


	public void setCategory(Category category) {
		this.category = category;
	}


	public Provider getProvider() {
		return provider;
	}


	public void setProvider(Provider provider) {
		this.provider = provider;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public Double getPrice() {
		return price;
	}


	public void setPrice(Double price) {
		this.price = price;
	}


	public LocalDate getCreatedAt() {
		return createdAt;
	}


	public void setCreatedAt(LocalDate createdAt) {
		this.createdAt = createdAt;
	}


	public LocalDate getUpdatedAt() {
		return updatedAt;
	}


	public void setUpdatedAt(LocalDate updatedAt) {
		this.updatedAt = updatedAt;
	}


	public LocalDate getDeletedAt() {
		return deletedAt;
	}


	public void setDeletedAt(LocalDate deletedAt) {
		this.deletedAt = deletedAt;
	}


	@Override
	public String toString() {
		return "ProductEntity [idProduct=" + idProduct + ", code=" + code + ", productName=" + productName
				+ ", category=" + category + ", provider=" + provider + ", description=" + description + ", price="
				+ price + ", createdAt=" + createdAt + ", updatedAt=" + updatedAt + ", deletedAt=" + deletedAt + "]";
	}


}