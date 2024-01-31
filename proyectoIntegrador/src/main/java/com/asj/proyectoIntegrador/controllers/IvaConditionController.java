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
import com.asj.proyectoIntegrador.entities.IvaCondition;
import com.asj.proyectoIntegrador.services.IIvaConditionService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/iva")
public class IvaConditionController {

	private final IIvaConditionService ivaConditionService;

	public IvaConditionController(IIvaConditionService ivaConditionService) {
		this.ivaConditionService = ivaConditionService;
	}

	@GetMapping("/listado")
	public ResponseEntity<List<IvaCondition>> getAllIvaConditions() {
		try {
			List<IvaCondition> ivaConditionsList = ivaConditionService.listIvaCondition();
			return new ResponseEntity<>(ivaConditionsList, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/crear")
	public ResponseEntity<IvaCondition> createIvaCondition(@RequestBody IvaCondition ivaCondition) {
		try {
			ivaConditionService.saveIvaCondition(ivaCondition);
			return new ResponseEntity<>(ivaCondition, HttpStatus.OK);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}

}
