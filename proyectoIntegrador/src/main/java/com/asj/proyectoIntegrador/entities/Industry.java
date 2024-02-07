package com.asj.proyectoIntegrador.entities;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class Industry {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idIndustry;
	@NotNull
	@NotBlank
	@Size(min=3)
	private String industry;
	private LocalDate createdAt;
	private LocalDate updatedAt;
	private LocalDate deletedAt;
	
	public Industry() {
	}


	public Industry(Integer idIndustry, @NotNull @NotBlank @Size(min = 3) String industry, LocalDate createdAt,
			LocalDate updatedAt, LocalDate deletedAt) {
		this.idIndustry = idIndustry;
		this.industry = industry;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.deletedAt = deletedAt;
	}

	

	public LocalDate getDeletedAt() {
		return deletedAt;
	}


	public void setDeletedAt(LocalDate deletedAt) {
		this.deletedAt = deletedAt;
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
