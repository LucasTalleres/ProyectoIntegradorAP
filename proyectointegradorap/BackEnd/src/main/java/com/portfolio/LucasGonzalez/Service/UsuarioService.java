package com.portfolio.LucasGonzalez.Service;

import com.portfolio.LucasGonzalez.exception.UserNotFoundException;
import com.portfolio.LucasGonzalez.Model.Info;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.portfolio.LucasGonzalez.Repository.IInfoRepository;

@Service
@Transactional
public class UsuarioService {
    private final IInfoRepository usuarioRepository;
    
    @Autowired
    public UsuarioService(IInfoRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    public Info addUsuario(Info usuario ){
        return usuarioRepository.save(usuario);
    }
    public List<Info> buscarUsuario(){
        return usuarioRepository.findAll();
    }
    public Info editarUsuario(Info usuario){
        return usuarioRepository.save(usuario);
    }
    public void borrarUsuario(Long id){
        usuarioRepository.deleteById(id);
    }

    public Info buscarUsuarioPorId(Long id) {
        return usuarioRepository.findById(id).orElseThrow(() ->new UserNotFoundException("Usuario no encontrado")); 
    }
}
