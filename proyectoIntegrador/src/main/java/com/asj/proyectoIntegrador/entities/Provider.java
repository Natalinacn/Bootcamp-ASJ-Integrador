package com.asj.proyectoIntegrador.entities;

import java.time.LocalDate;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class Provider {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idProvider;
	@NotNull
	@NotBlank
	@Size(min=3)
	private String providerCode;
	@NotNull
	@NotBlank
	@Size(min=3)
	private String businessName;
	private String img;
	@NotNull
	@NotBlank
	@Size(min=10)
	private String cuit;
	private String website;
	private String phone;
	@Email
	private String email;

	@ManyToOne
	@JoinColumn(name = "industry_id")
	private Industry industry;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "address_id")
	private Address address;
	@ManyToOne
	@JoinColumn(name = "ivaCondition_id")
	private IvaCondition ivaCondition;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "responsiblePerson")
	private ResponsiblePerson responsiblePerson;
	private LocalDate createdAt;
	private LocalDate updatedAt;
	private LocalDate deletedAt;

	public Provider() {
	}

	public Provider(Integer idProvider, String providerCode, String businessName, String img, String cuit,
			String website, String phone, String email, Industry industry, Address address, IvaCondition ivaCondition,
			ResponsiblePerson responsiblePerson, LocalDate createdAt, LocalDate updatedAt, LocalDate deletedAt) {
		this.idProvider = idProvider;
		this.providerCode = providerCode;
		this.businessName = businessName;
		this.img = img;
		this.cuit = cuit;
		this.website = website;
		this.phone = phone;
		this.email = email;
		this.industry = industry;
		this.address = address;
		this.ivaCondition = ivaCondition;
		this.responsiblePerson = responsiblePerson;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
		this.deletedAt = deletedAt;
	}

	public Integer getIdProvider() {
		return idProvider;
	}

	public void setIdProvider(Integer idProvider) {
		this.idProvider = idProvider;
	}

	public String getProviderCode() {
		return providerCode;
	}

	public void setProviderCode(String providerCode) {
		this.providerCode = providerCode;
	}


	public String getBusinessName() {
		return businessName;
	}

	public void setBusinessName(String businessName) {
		this.businessName = businessName;
	}

	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public String getCuit() {
		return cuit;
	}

	public void setCuit(String cuit) {
		this.cuit = cuit;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

	public Industry getIndustry() {
		return industry;
	}

	public void setIndustry(Industry industry) {
		this.industry = industry;
	}

	public Address getAddress() {
		return address;
	}

	public void setAddress(Address address) {
		this.address = address;
	}

	public IvaCondition getIvaCondition() {
		return ivaCondition;
	}

	public void setIvaCondition(IvaCondition ivaCondition) {
		this.ivaCondition = ivaCondition;
	}

	public ResponsiblePerson getResponsiblePerson() {
		return responsiblePerson;
	}

	public void setResponsiblePerson(ResponsiblePerson responsiblePerson) {
		this.responsiblePerson = responsiblePerson;
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
		return "Provider [idProvider=" + idProvider + ", providerCode=" + providerCode + ", businessName="
				+ businessName + ", cuit=" + cuit + ", phone=" + phone + ", email=" + email + ", website=" + website
				+ ", industry=" + industry + ", address=" + address + ", ivaCondition=" + ivaCondition
				+ ", responsiblePerson=" + responsiblePerson + ", createdAt=" + createdAt + ", updatedAt=" + updatedAt
				+ ", deletedAt=" + deletedAt + "]";
	}

}
