package com.asj.proyectoIntegrador.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asj.proyectoIntegrador.entities.OrderDetail;
import com.asj.proyectoIntegrador.services.IOrderDetailService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/detalle")
public class OrderDetailController {

	private final IOrderDetailService orderDetailService;

	public OrderDetailController(IOrderDetailService orderDetailService) {
		this.orderDetailService = orderDetailService;
	}

	@PostMapping("/crear")
	public ResponseEntity<OrderDetail> createOrderDetail(@RequestBody OrderDetail orderDetail) {
		try {
			orderDetailService.saveOrder(orderDetail);
			return new ResponseEntity<>(orderDetail, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/listado")
	public ResponseEntity<List<OrderDetail>> getAllOrderDetails() {
		try {
			List<OrderDetail> orderDetailList = orderDetailService.listAllOrderDetails();
			return new ResponseEntity<>(orderDetailList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
