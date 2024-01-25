package com.asj.proyectoIntegrador.entities;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Industry {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idIndustry;
	private String industry;
	private LocalDate createdAt;
	private LocalDate updatedAt;
	
	public Industry() {
	}

	public Industry(Integer idIndustry, String industry, LocalDate createdAt, LocalDate updatedAt) {
		this.idIndustry = idIndustry;
		this.industry = industry;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public Integer getIdIndustry() {
		return idIndustry;
	}

	public void setIdIndustry(Integer idIndustry) {
		this.idIndustry = idIndustry;
	}

	public String getIndustry() {
		return industry;
	}

	public void setIndustry(String industry) {
		this.industry = industry;
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

	@Override
	public String toString() {
		return "Industry [idIndustry=" + idIndustry + ", industry=" + industry + ", createdAt=" + createdAt
				+ ", updatedAt=" + updatedAt + "]";
	}
	
	
	
}
