package com.portfolio.LucasGonzalez.Repository;

import com.portfolio.LucasGonzalez.Model.Info;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IInfoRepository extends JpaRepository<Info, Long>{
    
}
