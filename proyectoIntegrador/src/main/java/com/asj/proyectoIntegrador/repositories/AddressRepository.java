package com.asj.proyectoIntegrador.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.asj.proyectoIntegrador.entities.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Integer> {

}
