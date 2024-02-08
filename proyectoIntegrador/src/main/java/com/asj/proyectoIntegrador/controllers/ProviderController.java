package com.asj.proyectoIntegrador.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asj.proyectoIntegrador.entities.Provider;
import com.asj.proyectoIntegrador.services.IProviderService;

import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("proveedores")
@CrossOrigin(origins = "http://localhost:4200")
public class ProviderController {

	private final IProviderService iProviderService;

	public ProviderController(IProviderService iProviderService) {
		this.iProviderService = iProviderService;
	}

	@PostMapping("/formulario")
	public ResponseEntity<String> createProvider(@Valid @RequestBody Provider provider) {

		try {
			iProviderService.saveProvider(provider);
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping("/listadoTotal")
	public ResponseEntity<List<Provider>> getProviders() {
		List<Provider> providers;
		try {
			providers = this.iProviderService.listAllProviders();
			return new ResponseEntity<>(providers, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
	
	// Traigo los proveedores que no estan eliminados ACTIVOS
	@GetMapping("/listado")
	public ResponseEntity<List<Provider>> getActivatedProviders() {
		List<Provider> providers = this.iProviderService.listProvidersNotDeleted();
		return new ResponseEntity<>(providers, HttpStatus.OK);

	}

	//Traigo los eliminados
	
	@GetMapping("/listadoEliminados")
	public ResponseEntity<List<Provider>> getDeletedProviders() {
		List<Provider> providers = this.iProviderService.listProvidersDeleted();
		return new ResponseEntity<>(providers , HttpStatus.OK);
	}
	
	@GetMapping("/{idProvider}")
	public ResponseEntity<Provider> getProviderById(@PathVariable Integer idProvider){		
		try {
			Provider provider = iProviderService.findProviderById(idProvider);
			return new ResponseEntity<>(provider, HttpStatus.OK);			
		} catch (Exception e) {
			System.out.println("Hola");
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}		
	}
	
	@GetMapping("/cantidad")
	public ResponseEntity<Integer> getTotalProviderCount() {
		try {
			Integer providerQuantity = iProviderService.getTotalProviderCount();
			return new ResponseEntity<Integer>(providerQuantity, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<Integer>(HttpStatus.BAD_REQUEST);
		}
	}

	@DeleteMapping("/{idProvider}")
	public ResponseEntity<?> deleteProvider(@PathVariable Integer idProvider) {
		try {
			iProviderService.deleteProvider(idProvider);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PutMapping("actualizar/{idProvider}")
	public ResponseEntity<Provider> updateProvider(@PathVariable Integer idProvider, @Valid @RequestBody Provider provider) {
		try {
			iProviderService.updateProvider(idProvider, provider);
			return new ResponseEntity<>(provider, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
