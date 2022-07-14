package com.portfolio.LucasGonzalez.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="experiencia")
public class Experiencia {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idExperiencia")
    private Long idExperiencia;
    @Column(name = "tituloExp")
    private String tituloExp;
    @Column(name = "iniExp")
    private int iniExp;
    @Column(name = "finExp")
    private int finExp;
    @Column(name = "descExp")
    private String descExp;
    @Column(name = "imgExp")
    private String imgExp;

    public Experiencia() {
        
    }

    public Experiencia(Long idExperiencia, String tituloExp, int iniExp, int finExp, String descExp, String imgExp) {
        this.idExperiencia = idExperiencia;
        this.tituloExp = tituloExp;
        this.iniExp = iniExp;
        this.finExp = finExp;
        this.descExp = descExp;
        this.imgExp = imgExp;
    }
    
    public Long getIdExperiencia() {
        return idExperiencia;
    }

    public String getTituloExp() {
        return tituloExp;
    }

    public void setTituloExp(String tituloExp) {
        this.tituloExp = tituloExp;
    }

    public int getIniExp() {
        return iniExp;
    }

    public void setIniExp(int iniExp) {
        this.iniExp = iniExp;
    }

    public int getFinExp() {
        return finExp;
    }

    public void setFinExp(int finExp) {
        this.finExp = finExp;
    }

    public String getDescExp() {
        return descExp;
    }

    public void setDescExp(String descExp) {
        this.descExp = descExp;
    }

    public String getImgExp() {
        return imgExp;
    }

    public void setImgExp(String imgExp) {
        this.imgExp = imgExp;
    }
    
    
    
}
