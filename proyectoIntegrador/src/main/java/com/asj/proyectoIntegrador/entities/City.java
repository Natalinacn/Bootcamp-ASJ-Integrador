package com.asj.proyectoIntegrador.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

@Entity
public class City {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idCity;
	@NotNull
	@NotBlank
	@Size(min=3)
	private String city;
	@ManyToOne
	@JoinColumn(name = "province_id")
	private Province province;
	
	public City() {
	}
	
	public City(Integer idCity, String city, Province province) {
		this.idCity = idCity;
		this.city = city;
		this.province = province;
	}
	
	public Integer getIdCity() {
		return idCity;
	}
	public void setIdCity(Integer idCity) {
		this.idCity = idCity;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public Province getProvince() {
		return province;
	}
	public void setProvince(Province province) {
		this.province = province;
	}
	@Override
	public String toString() {
		return "City [idCity=" + idCity + ", city=" + city + ", province=" + province + "]";
	}
	
	

}
