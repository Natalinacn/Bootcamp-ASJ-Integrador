package com.asj.proyectoIntegrador.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.asj.proyectoIntegrador.entities.PurchaseOrder;

@Repository
public interface PurchaseOrderRepository extends JpaRepository<PurchaseOrder, Integer>{
	
	PurchaseOrder findByIdPurchaseOrderAndDeletedAtNull(Integer idPurchaseOrder);
	
	//Lista las activas
	List<PurchaseOrder> findAllPurchaseOrderByDeletedAtIsNullOrderByOrderNumber();
	
	//Lista las canceladas
	List<PurchaseOrder> findAllPurchaseOrderByDeletedAtIsNotNullOrderByOrderNumber();

}
