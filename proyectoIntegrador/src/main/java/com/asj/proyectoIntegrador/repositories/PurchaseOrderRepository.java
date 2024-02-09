package com.asj.proyectoIntegrador.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.asj.proyectoIntegrador.entities.PurchaseOrder;

@Repository
public interface PurchaseOrderRepository extends JpaRepository<PurchaseOrder, Integer>{
	
	PurchaseOrder findByIdPurchaseOrderAndDeletedAtNull(Integer idPurchaseOrder);
	
	//Lista las activas
	List<PurchaseOrder> findAllPurchaseOrderByDeletedAtIsNullOrderByOrderNumber();
	
	//Lista las canceladas
	List<PurchaseOrder> findAllPurchaseOrderByDeletedAtIsNotNullOrderByOrderNumber();
	
	
	@Query("SELECT COUNT(or) FROM PurchaseOrder or WHERE or.deletedAt IS NULL")
	Integer getTotalOrderCount();
	
	Boolean existsByOrderNumber(String orderNumber);

}
