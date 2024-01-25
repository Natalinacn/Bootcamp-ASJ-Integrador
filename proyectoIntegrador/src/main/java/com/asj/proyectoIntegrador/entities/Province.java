package com.asj.proyectoIntegrador.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Province {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idProvince;
	private String province;
	@ManyToOne(optional = false)
	private Country country;
	
	
	public Province() {
	}


	public Province(Integer idProvince, String province, Country country) {
		this.idProvince = idProvince;
		this.province = province;
		this.country = country;
	}


	public Integer getIdProvince() {
		return idProvince;
	}


	public void setIdProvince(Integer idProvince) {
		this.idProvince = idProvince;
	}


	public String getProvince() {
		return province;
	}


	public void setProvince(String province) {
		this.province = province;
	}


	public Country getCountry() {
		return country;
	}


	public void setCountry(Country country) {
		this.country = country;
	}


	@Override
	public String toString() {
		return "Province [idProvince=" + idProvince + ", province=" + province + ", country=" + country + "]";
	}
	
	
	
	
	
}
