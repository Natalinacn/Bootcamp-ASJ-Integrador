package com.asj.proyectoIntegrador.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Country {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idCountry;
	private String country;
	
	
	public Country() {
	}


	public Country(Integer idCountry, String country) {
		this.idCountry = idCountry;
		this.country = country;
	}


	public Integer getIdCountry() {
		return idCountry;
	}


	public void setIdCountry(Integer idCountry) {
		this.idCountry = idCountry;
	}


	public String getCountry() {
		return country;
	}


	public void setCountry(String country) {
		this.country = country;
	}


	@Override
	public String toString() {
		return "Country [idCountry=" + idCountry + ", country=" + country + "]";
	}
	
	
	
}
