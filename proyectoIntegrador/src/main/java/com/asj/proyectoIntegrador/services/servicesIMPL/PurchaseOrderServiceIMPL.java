package com.asj.proyectoIntegrador.services.servicesIMPL;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.asj.proyectoIntegrador.entities.PurchaseOrder;
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
		if (purchaseOrder == null) {
			throw new Exception("La orden de compra es nula");
		}

		if (purchaseOrderRepository.existsByOrderNumber(purchaseOrder.getOrderNumber())) {
			throw new Exception("El número de orden ya existe");
		}
		purchaseOrder.setIssueDate(LocalDate.now());
		purchaseOrder.setCreatedAt(LocalDate.now());
		return purchaseOrderRepository.save(purchaseOrder);
	}

	@Override
	public List<PurchaseOrder> listAllPurchaseOrders() {
		List<PurchaseOrder> purchaseOrderList = purchaseOrderRepository.findAll();
		return purchaseOrderList;
	}

	// Busca órdenes por id
	@Override
	public PurchaseOrder findPurchaseOrderById(Integer idPurchaseOrder) throws Exception {
		PurchaseOrder purchaseOrder = purchaseOrderRepository.findById(idPurchaseOrder).get();

		if (purchaseOrder != null) {
			return purchaseOrder;
		} else {
			throw new Exception("La órden número " + purchaseOrder.getOrderNumber() + "no fue encontrada");
		}
	}

	@Override
	public List<PurchaseOrder> listCanceledPurchaseOrders() throws Exception {
		List<PurchaseOrder> purchaseOrderList = purchaseOrderRepository
				.findAllPurchaseOrderByDeletedAtIsNotNullOrderByOrderNumber();
		return purchaseOrderList;
	}

	@Override
	public List<PurchaseOrder> listActivePurchaseOrders() throws Exception {
		List<PurchaseOrder> purchaseOrderList = purchaseOrderRepository
				.findAllPurchaseOrderByDeletedAtIsNullOrderByOrderNumber();
		return purchaseOrderList;
	}

	@Override
	public PurchaseOrder deletePucharseOrder(Integer idPurchaseOrder) throws Exception {

		PurchaseOrder purchaseOrder = purchaseOrderRepository.findByIdPurchaseOrderAndDeletedAtNull(idPurchaseOrder);

		if (purchaseOrder != null) {
			purchaseOrder.setDeletedAt(LocalDate.now());
			purchaseOrder.setStatus(false);
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

	@Override
	public Integer getTotalPurchaseCount() throws Exception {
		Integer purchaseQuantity = purchaseOrderRepository.getTotalOrderCount();
		if (purchaseQuantity >= 0) {
			return purchaseQuantity;
		} else {
			throw new Exception("No hay órdenes de compra cargados");
		}
	}
}
