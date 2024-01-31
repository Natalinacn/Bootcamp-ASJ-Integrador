package com.asj.proyectoIntegrador.entities;

import java.time.LocalDate;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class OrderDetail {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idOrderDetail;
	private Integer quantity;
	private Double price;
	@ManyToOne
	@JoinColumn(name = "product_id")
	private Product product;
	@ManyToOne
	@JoinColumn(name = "purchaseOrder_id")
	private PurchaseOrder purchaseOrder;
	private LocalDate createdAt;
	private LocalDate updatedAt;

	public OrderDetail() {
	}

	public OrderDetail(Integer idOrderDetail, Integer quantity, Double price, Product product,
			PurchaseOrder purchaseOrder, LocalDate createdAt, LocalDate updatedAt) {
		this.idOrderDetail = idOrderDetail;
		this.quantity = quantity;
		this.price = price;
		this.product = product;
		this.purchaseOrder = purchaseOrder;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public Integer getIdOrderDetail() {
		return idOrderDetail;
	}

	public void setIdOrderDetail(Integer idOrderDetail) {
		this.idOrderDetail = idOrderDetail;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public PurchaseOrder getPurchaseOrder() {
		return purchaseOrder;
	}

	public void setPurchaseOrder(PurchaseOrder purchaseOrder) {
		this.purchaseOrder = purchaseOrder;
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
}
