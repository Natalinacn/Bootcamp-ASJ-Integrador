package com.asj.proyectoIntegrador.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.asj.proyectoIntegrador.entities.Provider;

@Repository
public interface ProviderRepository extends JpaRepository<Provider, Integer> {

	List<Provider> findAllByOrderByBusinessNameAsc();

	Provider findByIdProviderAndDeletedAtNull(Integer idProvider);
	
	List<Provider> findAllProviderByDeletedAtIsNullOrderByBusinessNameAsc();
}
