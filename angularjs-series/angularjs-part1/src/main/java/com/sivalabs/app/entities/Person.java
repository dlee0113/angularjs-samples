/**
*
*
*/
package com.sivalabs.app.entities;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
public class Person implements Serializable
{
	private static final long serialVersionUID = 1L;
	@Id @GeneratedValue(strategy=GenerationType.AUTO)
	private Integer id;
	private String email;
	private String password;
	private String firstname;
	private String lastname;
	@Temporal(TemporalType.DATE)
	private Date dob;
	
	
	public Person() {
	}
	
	public Person(Integer id, String email, String password, String firstname,
			String lastname, Date dob) {
		this.id = id;
		this.email = email;
		this.password = password;
		this.firstname = firstname;
		this.lastname = lastname;
		this.dob = dob;
	}

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFirstname() {
		return firstname;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	
}
