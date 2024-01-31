package com.asj.proyectoIntegrador.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
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
	public ResponseEntity<List<PurchaseOrder>>

}
