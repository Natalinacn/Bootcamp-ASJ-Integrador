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

import com.asj.proyectoIntegrador.entities.City;
import com.asj.proyectoIntegrador.services.ICityService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/ciudades")
public class CityController {

	private final ICityService cityService;
	public CityController(ICityService cityService) {
		this.cityService = cityService;
	}

	@GetMapping("/listado")
	public ResponseEntity<List<City>> getCities() {
		try {
			List<City> cityList = cityService.listAllCities();
			return new ResponseEntity<>(cityList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}

	@PostMapping("/crear")
	public ResponseEntity<City> createCity(@Valid @RequestBody City city) {
		try {
			return new ResponseEntity<>(cityService.saveCity(city), HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

	}

}
