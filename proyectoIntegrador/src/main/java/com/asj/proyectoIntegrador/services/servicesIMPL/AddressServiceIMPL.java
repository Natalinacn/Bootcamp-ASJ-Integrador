package com.asj.proyectoIntegrador.services.servicesIMPL;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.asj.proyectoIntegrador.entities.Address;
import com.asj.proyectoIntegrador.entities.Product;
import com.asj.proyectoIntegrador.repositories.AddressRepository;
import com.asj.proyectoIntegrador.services.IAddressService;

@Service
public class AddressServiceIMPL implements IAddressService{
	
	private final AddressRepository addressRepository;

	public AddressServiceIMPL(AddressRepository addressRepository) {
		this.addressRepository = addressRepository;
	}

	@Override
	@Transactional
	public void saveAddress(Address address) throws Exception {
		if(address.getStreetAndNumber() != null) {
		addressRepository.save(address);
		}else {
			throw new Exception("No se pudo crear la dirección " + address.getIdAddress());
		}
		
	}

	@Override
	@Transactional(readOnly = true)
	public Address getAddressById(Integer idAddress) throws Exception {
		if(idAddress != null) {
		Address address = addressRepository.findById(idAddress).orElse(null);
		return address;
		}else {
			throw new Exception("Direccion no encontrado con ID: " + idAddress);
		}
	}
	
	@Override
	public Address updateAddress(Address address) {
		// TODO Auto-generated method stub
		return null;
	}
	
	
	

}
