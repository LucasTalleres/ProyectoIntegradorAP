package com.portfolio.LucasGonzalez.Service;

import com.portfolio.LucasGonzalez.Model.Proyectos;
import com.portfolio.LucasGonzalez.Repository.IProyectosRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ProyectosService {
    private final IProyectosRepository proyectosRepository;
    
    @Autowired
    public ProyectosService (IProyectosRepository proyectosRepository){
        this.proyectosRepository = proyectosRepository;
    }
    public Proyectos addProyectos(Proyectos proyectos ){
        return proyectosRepository.save(proyectos);
    }
    public List<Proyectos> buscarProyectos(){
        return proyectosRepository.findAll();
    }
    public Proyectos editarProyectos(Proyectos proyectos){
        return proyectosRepository.save(proyectos);
    }
    public void borrarProyectos(Long id){
        proyectosRepository.deleteById(id);
    }
}
