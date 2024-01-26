package com.asj.proyectoIntegrador.services.servicesIMPL;

import java.util.List;

import org.springframework.stereotype.Service;

import com.asj.proyectoIntegrador.entities.Province;
import com.asj.proyectoIntegrador.repositories.ProvinceRepository;
import com.asj.proyectoIntegrador.services.IProvinceService;

@Service
public class ProvinceServiceIMPL implements IProvinceService {

	private final ProvinceRepository provinceRepository;

	public ProvinceServiceIMPL(ProvinceRepository provinceRepository) {
		this.provinceRepository = provinceRepository;
	}

	@Override
	public List<Province> listAllProvinces() throws Exception {

		List<Province> provinceList = provinceRepository.findAllByOrderByProvinceAsc();
		if(provinceList != null) {
			return provinceList;
		} else {
			throw new Exception("La lista de provincias está vacía");
		}
	}

}
