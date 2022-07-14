package com.portfolio.LucasGonzalez.Service;

import com.portfolio.LucasGonzalez.Model.Experiencia;
import com.portfolio.LucasGonzalez.Repository.IExperienciaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ExperienciaService {
    
    private final IExperienciaRepository experienciaRepository;

    @Autowired
    public ExperienciaService(IExperienciaRepository experienciaRepository) {
        this.experienciaRepository = experienciaRepository;
    }
    public Experiencia addExperiencia(Experiencia experiencia ){
        return experienciaRepository.save(experiencia);
    }
    public List<Experiencia> buscarExperiencias(){
        return experienciaRepository.findAll();
    }
    public Experiencia editarExperiencia(Experiencia experiencia){
        return experienciaRepository.save(experiencia);
    }
    public void borrarExperiencia(Long id){
        experienciaRepository.deleteById(id);
    }
}
