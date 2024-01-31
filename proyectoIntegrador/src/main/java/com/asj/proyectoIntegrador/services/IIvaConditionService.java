package com.asj.proyectoIntegrador.services;

import java.util.List;

import com.asj.proyectoIntegrador.entities.IvaCondition;

public interface IIvaConditionService {
	
	public List<IvaCondition> listIvaCondition() throws Exception;

	void saveIvaCondition(IvaCondition ivaCondition) throws Exception;

}
