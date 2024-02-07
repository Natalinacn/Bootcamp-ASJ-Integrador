package com.asj.proyectoIntegrador.services;

import java.util.List;
import com.asj.proyectoIntegrador.entities.Industry;

public interface IIndustryService {
	
	public void saveIndustry(Industry industry) throws Exception;
	public List<Industry> listAllIndustries() throws Exception;
	Industry getIndustryById(Integer idIndustry) throws Exception;
	Industry deleteIndustry(Integer idIndustry) throws Exception;
	Industry updateIndustry(Integer idIndustry, Industry industry) throws Exception;
	List<Industry> listActivedIndustries() throws Exception;

}
