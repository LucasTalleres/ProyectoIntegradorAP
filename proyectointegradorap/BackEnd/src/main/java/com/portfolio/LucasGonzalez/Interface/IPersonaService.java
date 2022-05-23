package com.portfolio.LucasGonzalez.Interface;

import com.portfolio.LucasGonzalez.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    //Traer lista de persona
    
    public List<Persona> getPersona();
    
    //Guardar objeto tipo persona
    public void savePersona(Persona persona);
    
    //Eliminar objeto pero lo busco por Id
    public void deletePersona(Long id);
    
    //Buscar persona por id
    public Persona findPersona(Long id);    
}
