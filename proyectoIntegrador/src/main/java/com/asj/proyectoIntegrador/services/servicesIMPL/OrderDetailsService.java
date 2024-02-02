package com.asj.proyectoIntegrador.services.servicesIMPL;

import java.util.List;

import org.springframework.stereotype.Service;

import com.asj.proyectoIntegrador.entities.OrderDetail;
import com.asj.proyectoIntegrador.repositories.OrderDetailRepository;
import com.asj.proyectoIntegrador.services.IOrderDetailService;

import jakarta.transaction.Transactional;

@Service
public class OrderDetailsService implements IOrderDetailService {

	private final OrderDetailRepository orderDetailRepository;

	public OrderDetailsService(OrderDetailRepository orderDetailRepository) {
		this.orderDetailRepository = orderDetailRepository;
	}

	@Override
	@Transactional
	public OrderDetail saveOrder(OrderDetail orderDetail) throws Exception {

		if (orderDetail != null) {
			OrderDetail newOrderDetail = orderDetailRepository.save(orderDetail);
			return newOrderDetail;
		} else {
			throw new Exception("Error al crear el detalle de la orden");
		}
	}

	@Override
	public List<OrderDetail> listAllOrderDetails() {

		List<OrderDetail> orderDetailList = orderDetailRepository.findAll();

		return orderDetailList;

	}

}
