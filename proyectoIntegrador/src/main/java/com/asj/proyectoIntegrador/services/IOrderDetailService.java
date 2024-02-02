package com.asj.proyectoIntegrador.services;

import java.util.List;

import com.asj.proyectoIntegrador.entities.OrderDetail;

public interface IOrderDetailService {

	OrderDetail saveOrder(OrderDetail orderDetail) throws Exception;

	List<OrderDetail> listAllOrderDetails();

}
