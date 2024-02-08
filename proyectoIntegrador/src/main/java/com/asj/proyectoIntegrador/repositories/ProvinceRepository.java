package com.asj.proyectoIntegrador.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.asj.proyectoIntegrador.entities.Province;

@Repository
public interface ProvinceRepository extends JpaRepository<Province, Integer> {

	List<Province> findAllByOrderByProvinceAsc();
	
	List<Province> findByCountryIdCountry(Integer idCountry);

}
