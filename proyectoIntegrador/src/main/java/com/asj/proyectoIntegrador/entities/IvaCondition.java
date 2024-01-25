package com.asj.proyectoIntegrador.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class IvaCondition {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idIvaCondition;
	private String ivaCondition;
	
	
	public IvaCondition() {
	}
	
	public IvaCondition(Integer idIvaCondition, String ivaCondition) {
		this.idIvaCondition = idIvaCondition;
		this.ivaCondition = ivaCondition;
	}
	public Integer getIdIvaCondition() {
		return idIvaCondition;
	}
	public void setIdIvaCondition(Integer idIvaCondition) {
		this.idIvaCondition = idIvaCondition;
	}
	public String getIvaCondition() {
		return ivaCondition;
	}
	public void setIvaCondition(String ivaCondition) {
		this.ivaCondition = ivaCondition;
	}
	@Override
	public String toString() {
		return "IvaCondition [idIvaCondition=" + idIvaCondition + ", ivaCondition=" + ivaCondition + "]";
	}
	
	

}
