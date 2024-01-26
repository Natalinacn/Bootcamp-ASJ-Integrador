package com.asj.proyectoIntegrador.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.asj.proyectoIntegrador.entities.Province;
import com.asj.proyectoIntegrador.services.IProvinceService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/provincias")
public class ProvinceController {

	private final IProvinceService provinceService;

	public ProvinceController(IProvinceService provinceService) {
		this.provinceService = provinceService;
	}

	@GetMapping("/listado")
	public ResponseEntity<List<Province>> getProvinces() {

		List<Province> provincesList;

		try {
			provincesList = provinceService.listAllProvinces();
			return new ResponseEntity<>(provincesList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

	}
}
