package com.asj.proyectoIntegrador.services.servicesIMPL;

import java.util.List;

import org.springframework.stereotype.Service;

import com.asj.proyectoIntegrador.entities.Category;
import com.asj.proyectoIntegrador.entities.Country;
import com.asj.proyectoIntegrador.repositories.CountryRepository;
import com.asj.proyectoIntegrador.services.ICategoryService;
import com.asj.proyectoIntegrador.services.ICountryService;

@Service
public class CountryServiceIMPL implements ICountryService{
	
	private CountryRepository countryRepository;
	
	public CountryServiceIMPL(CountryRepository countryRepository) {
		this.countryRepository = countryRepository;
	}


	@Override
	public List<Country> listAllCountries() throws Exception {
		List<Country> countriesList = countryRepository.findAllByOrderByCountryAsc();
		
		if(countriesList != null) {
		return countriesList;
		}else {
			throw new Exception("La lista de países está vacía");		}
	}


}
