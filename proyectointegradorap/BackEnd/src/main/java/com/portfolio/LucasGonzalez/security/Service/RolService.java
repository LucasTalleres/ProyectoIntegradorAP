
package com.portfolio.LucasGonzalez.security.Service;

import com.portfolio.LucasGonzalez.security.Entity.Rol;
import com.portfolio.LucasGonzalez.security.Enums.RolNombre;
import com.portfolio.LucasGonzalez.security.Repository.IRolRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class RolService {
    @Autowired
    IRolRepository irolRepository;
    
    public Optional<Rol> getByRolNombre(RolNombre rolNombre){
        return irolRepository.findByRolNombre(rolNombre);
    }
    
    public void save(Rol rol){
        irolRepository.save(rol);
    }
}
