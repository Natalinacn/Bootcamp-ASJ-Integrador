package com.asj.proyectoIntegrador.services;

import java.util.List;

import org.apache.catalina.authenticator.SavedRequest;

import com.asj.proyectoIntegrador.entities.Industry;

public interface IIndustryService {
	
	public void saveIndustry(Industry industry) throws Exception;
	public List<Industry> listAllIndustries() throws Exception;

}
