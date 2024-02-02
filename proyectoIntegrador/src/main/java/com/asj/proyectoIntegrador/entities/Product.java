package com.asj.proyectoIntegrador.entities;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
	@JoinColumn(name = "category_id")
	private Category category;
	@ManyToOne
	@JoinColumn(name = "provider_id")
	private Provider provider;
	private String description;
	private Double price;
	private String img;
	private LocalDate createdAt;
	private LocalDate updatedAt;
	private LocalDate deletedAt;
    
	public Product() {
	}


	public String getImg() {
		return img;
	}


	public void setImg(String img) {
		this.img = img;
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
