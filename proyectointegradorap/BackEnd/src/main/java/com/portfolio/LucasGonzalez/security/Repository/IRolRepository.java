package com.portfolio.LucasGonzalez.security.Repository;

import com.portfolio.LucasGonzalez.security.Entity.Rol;
import com.portfolio.LucasGonzalez.security.Enums.RolNombre;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IRolRepository extends JpaRepository<Rol, Integer>{
    Optional<Rol> findByRolNombre(RolNombre rolNombre);
    }
