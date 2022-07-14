package com.portfolio.LucasGonzalez.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="educacion")
public class Educacion {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idEducacion")
    private Long idEducacion;
    
    @Column(name = "tituloEdu")
    private String tituloEdu;
    
    @Column(name = "iniEdu")
    private int iniEdu;
    
    @Column(name = "finEdu")
    private int finEdu;
    
    @Column(name = "descripcionEdu")
    private String descripcionEdu;
    
    @Column(name = "imgEdu")
    private String imgEdu;
    
    public Long getIdEducacion() {
        return idEducacion;
    }
    
    public void setIdEducacion(Long idEducacion) {
        this.idEducacion = idEducacion;
    }

    public String getTituloEdu() {
        return tituloEdu;
    }

    public void setTituloEdu(String tituloEdu) {
        this.tituloEdu = tituloEdu;
    }

    public int getIniEdu() {
        return iniEdu;
    }

    public void setIniEdu(int iniEdu) {
        this.iniEdu = iniEdu;
    }

    public int getFinEdu() {
        return finEdu;
    }

    public void setFinEdu(int finEdu) {
        this.finEdu = finEdu;
    }

    public String getDescEdu() {
        return descripcionEdu;
    }

    public void setDescEdu(String descEdu) {
        this.descripcionEdu = descEdu;
    }

    public String getImgEdu() {
        return imgEdu;
    }

    public void setImgEdu(String imgEdu) {
        this.imgEdu = imgEdu;
    }
    
    
    
}
