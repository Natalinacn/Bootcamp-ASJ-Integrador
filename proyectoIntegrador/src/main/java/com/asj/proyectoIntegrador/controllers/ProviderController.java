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

import com.asj.proyectoIntegrador.entities.Product;
import com.asj.proyectoIntegrador.entities.Provider;
import com.asj.proyectoIntegrador.services.IProviderService;

@RestController
@RequestMapping("proveedores")
@CrossOrigin(origins = "http://localhost:4200")
public class ProviderController {

	private final IProviderService iProviderService;

	public ProviderController(IProviderService iProviderService) {
		this.iProviderService = iProviderService;
	}

	@PostMapping("/formulario")
	public ResponseEntity<Provider> createProvider(@RequestBody Provider provider) {

		try {
			iProviderService.saveProvider(provider);
			return new ResponseEntity<>(provider, HttpStatus.CREATED);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}
	
	@GetMapping("/listado")
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

	
}
