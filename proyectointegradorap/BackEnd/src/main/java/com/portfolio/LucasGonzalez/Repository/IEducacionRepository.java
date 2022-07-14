package com.portfolio.LucasGonzalez.Repository;

import com.portfolio.LucasGonzalez.Model.Educacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IEducacionRepository extends JpaRepository<Educacion, Long>{
    
}
