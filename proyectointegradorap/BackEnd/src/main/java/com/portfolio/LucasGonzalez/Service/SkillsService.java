package com.portfolio.LucasGonzalez.Service;

import com.portfolio.LucasGonzalez.Model.Skills;
import com.portfolio.LucasGonzalez.Repository.ISkillsRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class SkillsService {
    
    private final ISkillsRepository skillsRepository;

    @Autowired
    public SkillsService(ISkillsRepository skillsRepository) {
        this.skillsRepository = skillsRepository;
    }
    public Skills addSkills(Skills skills ){
        return skillsRepository.save(skills);
    }
    public List<Skills> buscarSkills(){
        return skillsRepository.findAll();
    }
    public Skills editarSkills(Skills skills){
        return skillsRepository.save(skills);
    }
    public void borrarSkills(Long id){
        skillsRepository.deleteById(id);
    }
}
