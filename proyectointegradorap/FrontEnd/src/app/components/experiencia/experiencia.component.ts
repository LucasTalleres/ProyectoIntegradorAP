import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  public experiencia:Experiencia[]=[];
  public editarExperiencia:Experiencia | undefined;
  public borrarExperiencia:Experiencia | undefined;

  isLogged = false;
  
  constructor(private experienciaService:ExperienciaService, private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getExperiencia();
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

  public getExperiencia():void{
    this.experienciaService.obtenerExperiencias().subscribe({
      next:(Response:Experiencia[]) =>{
        this.experiencia=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
  public onOpenModal(mode:String, experiencia?: Experiencia):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    console.log('OPEN MODAL')
    if(mode==='add'){
      button.setAttribute('data-target','#addExperienciaModal');
    }else if(mode==='delete'){
      this.borrarExperiencia=experiencia;
      button.setAttribute('data-bs-target','#deleteExperienciaModal');
    }else if(mode==='edit'){
      console.log('edit modal')
      this.editarExperiencia=experiencia;
      button.setAttribute('data-target','#editExperienciaModal');
    }
    container?.appendChild(button);
    button.click();
  }
  public onAddExperiencia(addForm:NgForm){
    document.getElementById('add-experiencia-form')?.click();
    this.experienciaService.addExperiencia(addForm.value).subscribe({
      next:(response:Experiencia) =>{
        console.log(response);
        this.getExperiencia();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    })
  }
  public onUpdateExperiencia(experiencia:Experiencia){
    this.editarExperiencia=experiencia;
    document.getElementById('add-experiencia-form')?.click();
    this.experienciaService.editarExperiencia(experiencia).subscribe({
      next:(response:Experiencia) =>{
        console.log(response)
        this.getExperiencia();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
  public onDeleteExperiencia(idExperiencia:number):void{
    document.getElementById('add-experiencia-form')?.click();
    this.experienciaService.borrarExperiencia(idExperiencia).subscribe({
      next:(response:void) =>{
        console.log(response)
        this.getExperiencia();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}
