package com.asj.proyectoIntegrador.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asj.proyectoIntegrador.entities.PurchaseOrder;
import com.asj.proyectoIntegrador.services.IPurchaseOrderService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/ordenes")
public class PurchaseOrderController {

	private final IPurchaseOrderService purchaseOrderService;

	public PurchaseOrderController(IPurchaseOrderService purchaseOrderService) {
		this.purchaseOrderService = purchaseOrderService;
	}

	@GetMapping("/listado")
	public ResponseEntity<List<PurchaseOrder>> getPurchaseOrders() {
		try {
			List<PurchaseOrder> purchaseOrderList = purchaseOrderService.listAllPurchaseOrders();
			return new ResponseEntity<List<PurchaseOrder>>(purchaseOrderList, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<List<PurchaseOrder>>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/crear")
	public ResponseEntity<PurchaseOrder> createPurchaseOrder(@RequestBody PurchaseOrder purchaseOrder) {
		try {
			PurchaseOrder newPurchaseOrder = purchaseOrderService.savePurchaseOrder(purchaseOrder);
			return new ResponseEntity<PurchaseOrder>(newPurchaseOrder, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<PurchaseOrder>(HttpStatus.BAD_REQUEST);
		}
	}

	@DeleteMapping("/{idPurchaseOrder}")
	public ResponseEntity<PurchaseOrder> deletePurchaseOrder(@PathVariable Integer idPurchaseOrder) {
		try {
			PurchaseOrder deletedPurchaseOrder = purchaseOrderService.deletePucharseOrder(idPurchaseOrder);
			return new ResponseEntity<>(deletedPurchaseOrder, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PutMapping("/actualizar/{idPurchaseOrder}")
	public ResponseEntity<PurchaseOrder> updatePurchaseOrder(@PathVariable Integer idPurchaseOrder, @RequestBody PurchaseOrder purchaseOrder) {
		try {
			PurchaseOrder updatedPurchaseOrder  = purchaseOrderService.updatePurchaseOrder(idPurchaseOrder, purchaseOrder);
			return new ResponseEntity<PurchaseOrder>(updatedPurchaseOrder, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<PurchaseOrder>(HttpStatus.NOT_FOUND);
		}
		
	}

}
