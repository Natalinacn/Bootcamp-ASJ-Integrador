package com.asj.proyectoIntegrador.services.servicesIMPL;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.asj.proyectoIntegrador.entities.Address;
import com.asj.proyectoIntegrador.entities.Provider;
import com.asj.proyectoIntegrador.exception.ResourceNotFoundException;
import com.asj.proyectoIntegrador.repositories.AddressRepository;
import com.asj.proyectoIntegrador.repositories.ProviderRepository;
import com.asj.proyectoIntegrador.services.IProviderService;

import jakarta.transaction.Transactional;

@Service
public class ProviderServiceIMPL implements IProviderService {

	private ProviderRepository providerRepository;
	private AddressRepository addressRepository;

	public ProviderServiceIMPL(ProviderRepository providerRepository, AddressRepository addressRepository) {
		this.providerRepository = providerRepository;
		this.addressRepository = addressRepository;
	}

//	@Override
//	@Transactional
//	public Provider saveProvider(Provider provider) throws Exception {
//		if (provider.getBusinessName() != null) {
//			provider.setCreatedAt(LocalDate.now());
//			Address address = addressRepository.save(provider.getAddress());
//			provider.setAddress(address);
//			providerRepository.save(provider);
//			return provider;
//		} else {
//			throw new Exception("El proveedor no se pudo guardar correctamente");
//		}
//	}
	
	@Override
	@Transactional
	public Provider saveProvider(Provider provider) throws Exception {

	    if (providerRepository.existsByProviderCode(provider.getProviderCode())) {
	        throw new Exception("El código del proveedor ya existe");
	    }
	    if (providerRepository.existsByCuit(provider.getCuit())) {
	        throw new Exception("El cuit del proveedor ya existe");
	    }
		if (provider.getBusinessName() != null) {
			provider.setCreatedAt(LocalDate.now());
			Address address = addressRepository.save(provider.getAddress());
			provider.setAddress(address);
			providerRepository.save(provider);
			return provider;
		} else {
			throw new Exception("El proveedor no se pudo guardar correctamente");
		}
	}
	
	

	@Override
	public List<Provider> listAllProviders() {
		return providerRepository.findAll();
	}
	
	// Lista los no eliminados solamente, es el que debería ir en mi listado
	@Override
	public List<Provider> listProvidersNotDeleted() {
		return providerRepository.findAllProviderByDeletedAtIsNullOrderByBusinessNameAsc();
	}
	
	//Lista los eliminados
	@Override
	public List<Provider> listProvidersDeleted() {
		return providerRepository.findAllProviderByDeletedAtIsNotNullOrderByBusinessNameAsc();
	}

	@Override
	public void deleteProvider(Integer idProvider) {
		Provider provider = providerRepository.findByIdProviderAndDeletedAtNull(idProvider);

		if (provider != null) {
			provider.setDeletedAt(LocalDate.now());
			providerRepository.save(provider);
		} else {
			throw new ResourceNotFoundException(idProvider);
		}

	}

	@Override
	@Transactional
	public Provider updateProvider(Integer idProvider, Provider provider) throws Exception {
		Provider updatedprovider = providerRepository.findById(idProvider).get();
		if (updatedprovider != null) {
			updatedprovider.setProviderCode(provider.getProviderCode());
			updatedprovider.setBusinessName(provider.getBusinessName());
			updatedprovider.setImg(provider.getImg());
			updatedprovider.setCuit(provider.getCuit());
			updatedprovider.setPhone(provider.getPhone());
			updatedprovider.setEmail(provider.getEmail());
			updatedprovider.setWebsite(provider.getWebsite());
			updatedprovider.setIndustry(provider.getIndustry());
			updatedprovider.setAddress(provider.getAddress());
			updatedprovider.setIvaCondition(provider.getIvaCondition());
			updatedprovider.setResponsiblePerson(provider.getResponsiblePerson());
			updatedprovider.setDeletedAt(provider.getDeletedAt());
			updatedprovider.setUpdatedAt(LocalDate.now());
			providerRepository.save(updatedprovider);
			return updatedprovider;
		} else {
			throw new Exception("Error al guardar el proveedor con id " + idProvider);
		}
	}

	@Override
	public Provider findProviderById(Integer idProvider) throws Exception {
		if (idProvider != null) {
			Provider provider = providerRepository.findById(idProvider).get();
			return provider;
		} else {
			throw new Exception("No se encontró el proveedor con ID " + idProvider);

		}
	}
	
	@Override
	public Integer getTotalProviderCount() throws Exception {
		Integer providersQuantity = providerRepository.getTotalProviderCount();
		if (providersQuantity >= 0) {
			return providersQuantity;
		} else {
			throw new Exception("No hay proveedores cargados");
		}
	}

}
