package com.asj.proyectoIntegrador.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.asj.proyectoIntegrador.entities.Industry;
import com.asj.proyectoIntegrador.services.IIndustryService;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/industrias")
public class IndustryController {

	private final IIndustryService iIndustryService;

	public IndustryController(IIndustryService iIndustryService) {
		this.iIndustryService = iIndustryService;
	}

	@GetMapping("/listado")
	public ResponseEntity<List<Industry>> getAllIndustries() {

		try {
			List<Industry> industryList = iIndustryService.listAllIndustries();
			return new ResponseEntity<>(industryList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/listadoActivas")
	public ResponseEntity<List<Industry>> getActivedIndustries() {

		try {
			List<Industry> industryList = iIndustryService.listActivedIndustries();
			return new ResponseEntity<>(industryList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	
	
	
	@PostMapping("/crear")
	public ResponseEntity<Industry> createIndustry(@Valid @RequestBody Industry industry) {
		try {
			iIndustryService.saveIndustry(industry);
			return new ResponseEntity<>(industry, HttpStatus.OK);
			
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		
	}
	
	
	
	@GetMapping("/{idIndustry}")
	public ResponseEntity<Industry> getIndustryById(@PathVariable Integer idIndustry) {
		try {
			Industry industry = iIndustryService.getIndustryById(idIndustry);
			return new ResponseEntity<>(industry, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	@DeleteMapping("/{idIndustry}")
	public ResponseEntity<Industry> deleteIndustry(@PathVariable Integer idIndustry) {
		try {
			iIndustryService.deleteIndustry(idIndustry);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	@PutMapping("actualizar/{idIndustry}")
	public ResponseEntity<Industry> updateIndustry(@PathVariable Integer idIndustry, @Valid @RequestBody Industry industry) {
		try {
			iIndustryService.updateIndustry(idIndustry, industry);
			return new ResponseEntity<>(industry, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	
	
}
