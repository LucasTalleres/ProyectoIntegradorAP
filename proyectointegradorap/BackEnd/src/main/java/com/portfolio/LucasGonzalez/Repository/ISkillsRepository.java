package com.portfolio.LucasGonzalez.Repository;

import com.portfolio.LucasGonzalez.Model.Skills;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ISkillsRepository extends JpaRepository<Skills, Long>{
    
}
