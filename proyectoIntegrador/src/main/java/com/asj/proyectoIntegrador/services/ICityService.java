package com.asj.proyectoIntegrador.services;

import java.util.List;

import com.asj.proyectoIntegrador.entities.City;

public interface ICityService {

	List<City> listAllCities() throws Exception;

	City saveCity(City city) throws Exception;
}
