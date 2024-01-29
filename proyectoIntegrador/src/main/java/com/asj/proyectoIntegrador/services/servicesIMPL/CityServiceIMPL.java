package com.asj.proyectoIntegrador.services.servicesIMPL;

import java.util.List;

import org.springframework.stereotype.Service;

import com.asj.proyectoIntegrador.entities.City;
import com.asj.proyectoIntegrador.repositories.CityRepository;
import com.asj.proyectoIntegrador.services.ICityService;

@Service
public class CityServiceIMPL implements ICityService {

	private final CityRepository cityRepository;

	public CityServiceIMPL(CityRepository cityRepository) {
		this.cityRepository = cityRepository;
	}

	public List<City> listAllCities() throws Exception {
		List<City> cityList = cityRepository.findAllByOrderByCityAsc();

		if (cityList != null) {

			return cityList;

		} else {
			throw new Exception("No hay ciudades cargadas");
		}
	}

	@Override
	public City saveCity(City city) throws Exception {
	    if (city.getCity() != null) {
	        return cityRepository.save(city);
	    } else {
	        throw new Exception("El nombre de la ciudad no puede estar vacío");
	    }
	}



}
