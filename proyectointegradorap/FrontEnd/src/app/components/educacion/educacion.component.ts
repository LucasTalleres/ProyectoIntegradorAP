import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  public educacion:Educacion[]=[];
  public editarEducacion:Educacion | undefined;
  public borrarEducacion:Educacion | undefined;
  
  isLogged = false;

  constructor(private educacionService:EducacionService,private router:Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.getEducacion();
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

  public getEducacion():void{
    this.educacionService.obtenerEducaciones().subscribe({
      next:(Response:Educacion[]) =>{
        this.educacion=Response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
  public onOpenModal(mode:String, educacion?: Educacion):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    console.log('OPEN MODAL')
    if(mode==='add'){
      button.setAttribute('data-target','#addEducacionModal');
    }else if(mode==='delete'){
      this.borrarEducacion=educacion;
      button.setAttribute('data-bs-target','#deleteEducacionModal');
    }else if(mode==='edit'){
      console.log('edit modal')
      this.editarEducacion=educacion;
      button.setAttribute('data-target','#editEducacionModal');
    }
    container?.appendChild(button);
    button.click();
  }
  public onAddEducacion(addForm:NgForm){
    document.getElementById('add-educacion-form')?.click();
    this.educacionService.addEducacion(addForm.value).subscribe({
      next:(response:Educacion) =>{
        console.log(response);
        this.getEducacion();
        addForm.reset();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
        addForm.reset();
      }
    })
  }
  public onUpdateEducacion(educacion:Educacion){
    this.editarEducacion=educacion;
    document.getElementById('add-educacion-form')?.click();
    this.educacionService.editarEducacion(educacion).subscribe({
      next:(response:Educacion) =>{
        console.log(response)
        this.getEducacion();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
  public onDeleteEducacion(idEducacion:number):void{
    document.getElementById('add-educacion-form')?.click();
    this.educacionService.borrarEducacion(idEducacion).subscribe({
      next:(response:void) =>{
        console.log(response)
        this.getEducacion();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }
}
