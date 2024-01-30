package com.asj.proyectoIntegrador.services;

import java.util.List;

import com.asj.proyectoIntegrador.entities.Provider;

public interface IProviderService {

	public Provider saveProvider(Provider provider) throws Exception;
	public List<Provider> listAllProviders();
	public void deleteProvider(Integer idProvider);
	public Provider updateProvider(Integer idProvider, Provider provider) throws Exception;
	public Provider findProviderById(Integer idProvider) throws Exception;
}
