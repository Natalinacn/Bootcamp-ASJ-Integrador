package com.asj.proyectoIntegrador.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asj.proyectoIntegrador.entities.Country;
import com.asj.proyectoIntegrador.services.ICountryService;

@RestController
@RequestMapping("paises")
@CrossOrigin(origins = "http://localhost:4200") 
public class CountryController {
	
	private final ICountryService countryService;

	public CountryController(ICountryService countryService) {
		this.countryService = countryService;
	}
	
	
	@GetMapping("/listado")
	public ResponseEntity<List<Country>> getCountries(){
		try{
			List<Country> countryList = countryService.listAllCountries();
			return new ResponseEntity<>(countryList, HttpStatus.OK);
		}catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
