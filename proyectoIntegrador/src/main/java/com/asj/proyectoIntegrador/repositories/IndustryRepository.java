package com.asj.proyectoIntegrador.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.asj.proyectoIntegrador.entities.Industry;

@Repository
public interface IndustryRepository extends JpaRepository<Industry, Integer> {

	List<Industry> findAllByOrderByIndustryAsc();

	List<Industry> findAllByDeletedAtIsNullOrderByIndustryAsc();
//
//	Industry findByidIndustryAndDeletedAtNull(Integer idIndustry);

}
