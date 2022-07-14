package com.portfolio.LucasGonzalez.Repository;

import com.portfolio.LucasGonzalez.Model.Experiencia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IExperienciaRepository extends JpaRepository<Experiencia, Long>{
    
}
