package com.asj.proyectoIntegrador.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException{
	
	
	public ResourceNotFoundException(String messagge) {
		super(messagge);
	}
	
	public ResourceNotFoundException(Integer idProduct) {
		super("Producto no encontrado con ID: " + idProduct);
	}

}
