package com.asj.proyectoIntegrador.services;

import com.asj.proyectoIntegrador.entities.Address;

public interface IAddressService {

	public void saveAddress(Address address) throws Exception;

	public Address updateAddress(Address address);

	Address getAddressById(Integer idAddress) throws Exception;

}
