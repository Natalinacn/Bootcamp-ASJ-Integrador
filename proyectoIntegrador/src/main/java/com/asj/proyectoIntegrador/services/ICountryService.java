package com.asj.proyectoIntegrador.services;

import java.util.List;

import com.asj.proyectoIntegrador.entities.Country;

public interface ICountryService {
	
	List<Country> listAllCountries() throws Exception;

}
