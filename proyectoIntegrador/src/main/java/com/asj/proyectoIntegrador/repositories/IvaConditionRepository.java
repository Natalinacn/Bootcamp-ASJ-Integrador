package com.asj.proyectoIntegrador.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.asj.proyectoIntegrador.entities.IvaCondition;

@Repository
public interface IvaConditionRepository extends JpaRepository<IvaCondition, Integer>{
	List<IvaCondition> findAllByOrderByIvaConditionAsc();

}
