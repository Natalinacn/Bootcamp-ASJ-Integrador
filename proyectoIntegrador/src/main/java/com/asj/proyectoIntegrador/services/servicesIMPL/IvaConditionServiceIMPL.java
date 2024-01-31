package com.asj.proyectoIntegrador.services.servicesIMPL;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.asj.proyectoIntegrador.entities.Industry;
import com.asj.proyectoIntegrador.entities.IvaCondition;
import com.asj.proyectoIntegrador.repositories.IvaConditionRepository;
import com.asj.proyectoIntegrador.services.IIvaConditionService;

@Service
public class IvaConditionServiceIMPL implements IIvaConditionService {

	private final IvaConditionRepository ivaConditionRepository;

	public IvaConditionServiceIMPL(IvaConditionRepository ivaConditionRepository) {
		this.ivaConditionRepository = ivaConditionRepository;
	}

	@Override
	public void saveIvaCondition(IvaCondition ivaCondition) throws Exception {
		if (ivaCondition.getIvaCondition() != null) {
			ivaConditionRepository.save(ivaCondition);
		} else {
			throw new Exception("Error al crear la condición de iva");
		}

	}

	@Override
	public List<IvaCondition> listIvaCondition() throws Exception {

		List<IvaCondition> ivaConditionList = ivaConditionRepository.findAllByOrderByIvaConditionAsc();

		if (ivaConditionList.isEmpty()) {
			throw new Exception("No hay condiciones de iva cargadas");
		} else {
			return ivaConditionList;
		}
	}
}
