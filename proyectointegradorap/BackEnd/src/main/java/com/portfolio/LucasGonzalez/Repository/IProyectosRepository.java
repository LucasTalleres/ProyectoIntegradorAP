package com.portfolio.LucasGonzalez.Repository;

import com.portfolio.LucasGonzalez.Model.Proyectos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IProyectosRepository extends JpaRepository<Proyectos, Long> {
    
}
