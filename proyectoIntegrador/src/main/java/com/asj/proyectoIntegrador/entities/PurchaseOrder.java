package com.asj.proyectoIntegrador.entities;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class PurchaseOrder {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idPurchaseOrder;
	private String orderNumber;
	private LocalDate issueDate;
	private LocalDate deliveryDate;
	private String receptionInfo;
	private String description;
	private Boolean status;
	private Double totalAmount;
	@ManyToOne
	@JoinColumn(name = "provider_id")
	private Provider provider;
	private LocalDate createdAt;
	private LocalDate updatedAt;
	private LocalDate deletedAt;

	
	public PurchaseOrder() {
	}

	public PurchaseOrder(Integer idPurchaseOrder, String orderNumber, LocalDate issueDate, LocalDate deliveryDate,
			String receptionInfo, String description, Boolean status, Double totalAmount, LocalDate createdAt,
			LocalDate updatedAt, LocalDate deletedAt, Provider provider) {
		this.idPurchaseOrder = idPurchaseOrder;
		this.orderNumber = orderNumber;
		this.issueDate = issueDate;
		this.deliveryDate = deliveryDate;
		this.receptionInfo = receptionInfo;
		this.description = description;
		this.status = status;
		this.totalAmount = totalAmount;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.deletedAt = deletedAt;
		this.provider = provider;
	}

	public Integer getIdPurchaseOrder() {
		return idPurchaseOrder;
	}

	public void setIdPurchaseOrder(Integer idPurchaseOrder) {
		this.idPurchaseOrder = idPurchaseOrder;
	}

	public String getOrderNumber() {
		return orderNumber;
	}

	public void setOrderNumber(String orderNumber) {
		this.orderNumber = orderNumber;
	}

	public LocalDate getIssueDate() {
		return issueDate;
	}

	public void setIssueDate(LocalDate issueDate) {
		this.issueDate = issueDate;
	}

	public LocalDate getDeliveryDate() {
		return deliveryDate;
	}

	public void setDeliveryDate(LocalDate deliveryDate) {
		this.deliveryDate = deliveryDate;
	}

	public String getReceptionInfo() {
		return receptionInfo;
	}

	public void setReceptionInfo(String receptionInfo) {
		this.receptionInfo = receptionInfo;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public Double getTotalAmount() {
		return totalAmount;
	}

	public void setTotalAmount(Double totalAmount) {
		this.totalAmount = totalAmount;
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

	public Provider getProvider() {
		return provider;
	}

	public void setProvider(Provider provider) {
		this.provider = provider;
	}

	@Override
	public String toString() {
		return "PurchaseOrder [idPurchaseOrder=" + idPurchaseOrder + ", orderNumber=" + orderNumber + ", issueDate="
				+ issueDate + ", deliveryDate=" + deliveryDate + ", receptionInfo=" + receptionInfo + ", description="
				+ description + ", status=" + status + ", totalAmount=" + totalAmount + ", createdAt=" + createdAt
				+ ", updatedAt=" + updatedAt + ", deletedAt=" + deletedAt + ", provider=" + provider + "]";
	}
	
	

}


