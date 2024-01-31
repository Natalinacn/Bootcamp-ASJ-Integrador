package com.asj.proyectoIntegrador.entities;

import java.time.LocalDate;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Address {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idAddress;
	private String streetAndNumber;
	private String postalCode;
	@ManyToOne (cascade = CascadeType.ALL)
	@JoinColumn(name = "city_id")
	private City city;
	private LocalDate createdAt;
	private LocalDate updatedAt;
	
	public Address() {
	}

	public Address(Integer idAddress, String streetAndNumber, String postalCode, City city, LocalDate createdAt,
			LocalDate updatedAt) {
		this.idAddress = idAddress;
		this.streetAndNumber = streetAndNumber;
		this.postalCode = postalCode;
		this.city = city;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}

	public Integer getIdAddress() {
		return idAddress;
	}

	public void setIdAddress(Integer idAddress) {
		this.idAddress = idAddress;
	}

	public String getStreetAndNumber() {
		return streetAndNumber;
	}

	public void setStreetAndNumber(String streetAndNumber) {
		this.streetAndNumber = streetAndNumber;
	}

	public String getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}






	public City getCity() {
		return city;
	}





	public void setCity(City city) {
		this.city = city;
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
