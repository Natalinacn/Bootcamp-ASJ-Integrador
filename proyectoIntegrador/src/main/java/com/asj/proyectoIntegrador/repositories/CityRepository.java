package com.asj.proyectoIntegrador.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.asj.proyectoIntegrador.entities.City;
import com.asj.proyectoIntegrador.entities.Country;

@Repository
public interface CityRepository extends JpaRepository<City, Integer>{
	
	List<City> findAllByOrderByCityAsc();

}
