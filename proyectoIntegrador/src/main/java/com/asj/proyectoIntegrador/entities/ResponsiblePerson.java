package com.asj.proyectoIntegrador.entities;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class ResponsiblePerson {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer idResponsiblePerson;
	private String firstName;
    private String lastName;
    private String phone;
    private String email;
    private String role;
	private LocalDate createdAt;
	private LocalDate updatedAt;
    
	public ResponsiblePerson() {
	}



	public ResponsiblePerson(Integer responsiblePerson, String firstName, String lastName, String phone, String email,
			String role, LocalDate createdAt, LocalDate updatedAt) {
		idResponsiblePerson = responsiblePerson;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phone;
		this.email = email;
		this.role = role;
		this.createdAt = createdAt;
		this.updatedAt = updatedAt;
	}



	public Integer getIdResponsiblePerson() {
		return idResponsiblePerson;
	}

	public void setIdResponsiblePerson(Integer responsiblePerson) {
		idResponsiblePerson = responsiblePerson;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	
	public LocalDate getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(LocalDate createdAt) {
		this.createdAt = createdAt;
	}



	public LocalDate getUpdatedAt() {
		return updatedAt;
	}



	public void setUpdatedAt(LocalDate updatedAt) {
		this.updatedAt = updatedAt;
	}



	@Override
	public String toString() {
		return "ResponsiblePerson [ResponsiblePerson=" + idResponsiblePerson + ", firstName=" + firstName + ", lastName="
				+ lastName + ", phone=" + phone + ", email=" + email + ", role=" + role + "]";
	}
    
	
    

}
