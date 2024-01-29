package com.asj.proyectoIntegrador.services.servicesIMPL;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.asj.proyectoIntegrador.entities.Industry;
import com.asj.proyectoIntegrador.repositories.IndustryRepository;
import com.asj.proyectoIntegrador.services.IIndustryService;

@Service
public class IndustryServiceIMPL implements IIndustryService {

	private final IndustryRepository industryRepository;

	public IndustryServiceIMPL(IndustryRepository industryRepository) {
		this.industryRepository = industryRepository;
	}

	@Override
	public void saveIndustry(Industry industry) throws Exception {
		if (industry.getIndustry() != null) {
			industry.setCreatedAt(LocalDate.now());
			industryRepository.save(industry);
		} else {
			throw new Exception("Error al crear la industria");
		}

	}

	@Override
	public List<Industry> listAllIndustries() throws Exception{
		List<Industry> industryList = industryRepository.findAllByOrderByIndustryAsc();
		if (industryList.isEmpty()) {
			throw new Exception("No hay industrias cargadas");
		} else {
			return industryList;
		}
	}

}
