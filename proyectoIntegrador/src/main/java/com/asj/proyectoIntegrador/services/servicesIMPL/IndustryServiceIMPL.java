package com.asj.proyectoIntegrador.services.servicesIMPL;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.asj.proyectoIntegrador.entities.Category;
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
	
	
	@Override
	@Transactional(readOnly = true)
	public List<Industry> listActivedIndustries() throws Exception {

		List<Industry> industryList = this.industryRepository.findAllByDeletedAtIsNullOrderByIndustryAsc();

		return industryList;
	}
	
	@Override
	@Transactional
	public Industry getIndustryById(Integer idIndustry) throws Exception {
		if(idIndustry != null) {
		Industry industry = industryRepository.findById(idIndustry).get();
		return industry;
		}else {
			throw new Exception("No se encontró el rubro"); 
		}
	}

	@Override
	@Transactional
	public Industry deleteIndustry(Integer idIndustry) throws Exception {
		Industry deletedIndustry = industryRepository.findById(idIndustry).get();

		if (deletedIndustry != null) {
			deletedIndustry.setDeletedAt(LocalDate.now());
			industryRepository.save(deletedIndustry);
			return deletedIndustry;
		} else {
			throw new Exception("Error al eliminar el rubro" + deletedIndustry.getIndustry());
		}

	}

	
	@Override
	public Industry updateIndustry(Integer idIndustry, Industry industry) throws Exception {
		Industry updatedIndustry = industryRepository.findById(idIndustry).get();

		if (updatedIndustry  != null) {
			updatedIndustry .setIndustry(industry.getIndustry());
			updatedIndustry.setDeletedAt(industry.getDeletedAt());
			updatedIndustry.setUpdatedAt(LocalDate.now());
			industryRepository.save(updatedIndustry);
			return updatedIndustry;
		} else {
			throw new Exception("Error al editar el rubro");
		}
	}


}
