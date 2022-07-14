package com.portfolio.LucasGonzalez.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="proyectos")
public class Proyectos {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idProyecto")
    private Long idProyecto;
    @Column(name = "nombreProyecto")
    private String nombreProyecto;
    @Column(name = "fechaProyecto")
    private int fechaProyecto;
    @Column(name = "descProyecto")
    private String descProyecto;


public Proyectos(){
        
}

public Proyectos(Long idProyecto, String nombreProyecto, int añoProyecto, String descProyecto) {
        this.idProyecto = idProyecto;
        this.nombreProyecto = nombreProyecto;
        this.fechaProyecto = fechaProyecto;
        this.descProyecto = descProyecto;
    }

    public Long getIdProyecto() {
        return idProyecto;
    }

    public void setIdProyecto(Long idProyecto) {
        this.idProyecto = idProyecto;
    }

    public String getNombreProyecto() {
        return nombreProyecto;
    }

    public void setNombreProyecto(String nombreProyecto) {
        this.nombreProyecto = nombreProyecto;
    }

    public int getFechaProyecto() {
        return fechaProyecto;
    }

    public void setFechaProyecto(int añoProyecto) {
        this.fechaProyecto = añoProyecto;
    }

    public String getDescProyecto() {
        return descProyecto;
    }

    public void setDescProyecto(String descProyecto) {
        this.descProyecto = descProyecto;
    }

}