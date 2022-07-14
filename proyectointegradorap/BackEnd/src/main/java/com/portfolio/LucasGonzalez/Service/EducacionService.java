package com.portfolio.LucasGonzalez.Service;

import com.portfolio.LucasGonzalez.Model.Educacion;
import com.portfolio.LucasGonzalez.Repository.IEducacionRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class EducacionService {
    
    private final IEducacionRepository educacionRepository;

    @Autowired
    public EducacionService(IEducacionRepository educacionRepository) {
        this.educacionRepository = educacionRepository;
    }
    public Educacion addEducacion(Educacion educacion ){
        return educacionRepository.save(educacion);
    }
    public List<Educacion> buscarEducaciones(){
        return educacionRepository.findAll();
    }
    public Educacion editarEducacion(Educacion educacion){
        return educacionRepository.save(educacion);
    }
    public void borrarEducacion(Long id){
        educacionRepository.deleteById(id);
    }
}
