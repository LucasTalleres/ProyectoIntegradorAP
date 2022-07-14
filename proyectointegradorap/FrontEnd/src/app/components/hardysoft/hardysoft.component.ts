import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Skills } from 'src/app/model/skills.model';
import { SkillsService } from 'src/app/service/skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hardysoft',
  templateUrl: './hardysoft.component.html',
  styleUrls: ['./hardysoft.component.css']
})
export class HardysoftComponent implements OnInit {
  public skills:Skills[]=[];
  public editarSkills:Skills | undefined;
  public borrarSkills:Skills | undefined;

  isLogged = false;

  constructor(private skillsService:SkillsService, private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  onLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    this.router.navigate(['/login']);
  }

  public getSkills():void{
    this.skillsService.obtenerSkills().subscribe({
      next:(Response:Skills[]) =>{
        this.skills=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
  public onOpenModal(mode:String, skills?: Skills):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    console.log('OPEN MODAL')
    if(mode==='add'){
      button.setAttribute('data-target','#addSkillModal');
    }else if(mode==='delete'){
      this.borrarSkills=skills;
      button.setAttribute('data-bs-target','#deleteSkillModal');
    }else if(mode==='edit'){
      console.log('edit modal')
      this.editarSkills=skills;
      button.setAttribute('data-target','#editSkillsModal');
    }
    container?.appendChild(button);
    button.click();
  }
  public onAddSkills(addForm:NgForm){
    document.getElementById('add-skills-form')?.click();
    this.skillsService.addSkills(addForm.value).subscribe({
      next:(response:Skills) =>{
        console.log(response);
        this.getSkills();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    })
  }
  public onUpdateSkills(skills:Skills){
    this.editarSkills=skills;
    document.getElementById('add-skills-form')?.click();
    this.skillsService.editarSkills(skills).subscribe({
      next:(response:Skills) =>{
        console.log(response)
        this.getSkills();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
  public onDeleteSkills(idSkills:number):void{
    document.getElementById('add-skills-form')?.click();
    this.skillsService.borrarSkills(idSkills).subscribe({
      next:(response:void) =>{
        console.log(response)
        this.getSkills();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}
