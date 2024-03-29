package com.asj.proyectoIntegrador.services;

import java.util.List;

import com.asj.proyectoIntegrador.entities.PurchaseOrder;

public interface IPurchaseOrderService {

	PurchaseOrder savePurchaseOrder(PurchaseOrder purchaseOrder) throws Exception;

	List<PurchaseOrder> listAllPurchaseOrders() throws Exception;

	PurchaseOrder deletePucharseOrder(Integer idPurchaseOrder) throws Exception;

	PurchaseOrder updatePurchaseOrder(Integer idPurchaseOrder, PurchaseOrder purchaseOrder) throws Exception;

	PurchaseOrder findPurchaseOrderById(Integer idPurchaseOrder) throws Exception;

	List<PurchaseOrder> listActivePurchaseOrders() throws Exception;

	List<PurchaseOrder> listCanceledPurchaseOrders() throws Exception;

	Integer getTotalPurchaseCount() throws Exception;

//	List<Product> getproductFromProvider(Integer provider_id) throws Exception;

}
