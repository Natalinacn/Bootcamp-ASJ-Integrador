package com.asj.proyectoIntegrador.services.servicesIMPL;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.asj.proyectoIntegrador.entities.PurchaseOrder;
import com.asj.proyectoIntegrador.exception.ResourceNotFoundException;
import com.asj.proyectoIntegrador.repositories.PurchaseOrderRepository;
import com.asj.proyectoIntegrador.services.IPurchaseOrderService;

import jakarta.transaction.Transactional;

@Service
public class PurchaseOrderServiceIMPL implements IPurchaseOrderService {

	private final PurchaseOrderRepository purchaseOrderRepository;

	public PurchaseOrderServiceIMPL(PurchaseOrderRepository purchaseOrderRepository) {
		this.purchaseOrderRepository = purchaseOrderRepository;
	}

	@Transactional
	@Override
	public PurchaseOrder savePurchaseOrder(PurchaseOrder purchaseOrder) throws Exception {
		if (purchaseOrder != null) {
			purchaseOrder.setCreatedAt(LocalDate.now());
			return purchaseOrderRepository.save(purchaseOrder);
		} else {
			throw new Exception("Error al guardar la órden de compra" + purchaseOrder.getOrderNumber());
		}
	}

	// Lista todas las órdenes
	@Override
	public List<PurchaseOrder> listAllPurchaseOrders() throws Exception {
		List<PurchaseOrder> purchaseOrderList = purchaseOrderRepository.findAll();
		if (purchaseOrderList.isEmpty()) {
			throw new Exception("La lista de órdenes de compra está vacía");
		} else {
			return purchaseOrderList;
		}
	}

	// Busca órdenes por id
	@Override
	public PurchaseOrder findPurchaseOrderById(Integer idPurchaseOrder) throws Exception {
		PurchaseOrder purchaseOrder = purchaseOrderRepository.findByIdPurchaseOrderAndDeletedAtNull(idPurchaseOrder);

		if (purchaseOrder != null) {
			return purchaseOrder;
		} else {
			throw new Exception("La órden número " + purchaseOrder.getOrderNumber() + "no fue encontrada");
		}

	}

	// Lista órdenes con fecha de eliminación(canceladas)
	@Override
	public List<PurchaseOrder> listCanceledPurchaseOrders() throws Exception {
		List<PurchaseOrder> purchaseOrderList = purchaseOrderRepository
				.findAllPurchaseOrderByDeletedAtIsNotNullOrderByOrderNumber();
		if (purchaseOrderList.isEmpty()) {
			throw new Exception("La lista de órdenes está vacía");
		} else {
			return purchaseOrderList;
		}
	}

	// Lista órdenes sin fecha de eliminación (activas)
	@Override
	public List<PurchaseOrder> listActivePurchaseOrders() throws Exception {
		List<PurchaseOrder> purchaseOrderList = purchaseOrderRepository
				.findAllPurchaseOrderByDeletedAtIsNullOrderByOrderNumber();
		if (purchaseOrderList.isEmpty()) {
			throw new Exception("La lista de órdenes está vacía");
		} else {
			return purchaseOrderList;
		}
	}

	@Override
	public PurchaseOrder deletePucharseOrder(Integer idPurchaseOrder) throws Exception {

		PurchaseOrder purchaseOrder = purchaseOrderRepository.findByIdPurchaseOrderAndDeletedAtNull(idPurchaseOrder);

		if (purchaseOrder != null) {
			purchaseOrder.setDeletedAt(LocalDate.now());
			purchaseOrderRepository.save(purchaseOrder);
			return purchaseOrder;
		} else {
			throw new Exception("Error al cancelar la órden de compra" + purchaseOrder.getOrderNumber());
		}
		

	}

	@Override
	public PurchaseOrder updatePurchaseOrder(Integer idPurchaseOrder, PurchaseOrder purchaseOrder) throws Exception {

		PurchaseOrder updatedPurchaseOrder = purchaseOrderRepository
				.findByIdPurchaseOrderAndDeletedAtNull(idPurchaseOrder);

		if (updatedPurchaseOrder != null) {
			updatedPurchaseOrder.setDescription(purchaseOrder.getDescription());
			updatedPurchaseOrder.setDeliveryDate(purchaseOrder.getDeliveryDate());
			updatedPurchaseOrder.setUpdatedAt(LocalDate.now());
			purchaseOrderRepository.save(updatedPurchaseOrder);
			return updatedPurchaseOrder;
		} else {
			throw new Exception("Error al actualizar la órden de compra" + purchaseOrder.getOrderNumber());
		}
	}

}
