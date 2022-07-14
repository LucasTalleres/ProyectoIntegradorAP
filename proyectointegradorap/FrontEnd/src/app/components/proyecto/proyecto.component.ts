import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyecto.model';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  public proyectos:Proyectos[]=[];
  public editarProyectos:Proyectos | undefined;
  public borrarProyectos:Proyectos | undefined;

  isLogged = false;

  constructor(private proyectosService:ProyectosService, private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getProyecto();
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

  public getProyecto():void{
    this.proyectosService.obtenerProyectos().subscribe({
      next:(Response:Proyectos[]) =>{
        this.proyectos=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
  public onOpenModal(mode:String, proyectos?: Proyectos):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    console.log('OPEN MODAL')
    if(mode==='add'){
      button.setAttribute('data-target','#addProyectosModal');
    }else if(mode==='delete'){
      this.borrarProyectos=proyectos;
      button.setAttribute('data-bs-target','#deleteProyectosModal');
    }else if(mode==='edit'){
      console.log('edit modal')
      this.editarProyectos=proyectos;
      button.setAttribute('data-target','#editProyectosModal');
    }
    container?.appendChild(button);
    button.click();
  }
  public onAddProyectos(addForm:NgForm){
    document.getElementById('add-proyectos-form')?.click();
    this.proyectosService.addProyectos(addForm.value).subscribe({
      next:(response:Proyectos) =>{
        console.log(response);
        this.getProyecto();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    })
  }
  public onUpdateProyectos(proyectos:Proyectos){
    this.editarProyectos=proyectos;
    document.getElementById('add-proyectos-form')?.click();
    this.proyectosService.editarProyectos(proyectos).subscribe({
      next:(response:Proyectos) =>{
        console.log(response)
        this.getProyecto();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
  public onDeleteProyectos(idProyecto:number):void{
    document.getElementById('add-proyectos-form')?.click();
    this.proyectosService.borrarProyectos(idProyecto).subscribe({
      next:(response:void) =>{
        console.log(response)
        this.getProyecto();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}
