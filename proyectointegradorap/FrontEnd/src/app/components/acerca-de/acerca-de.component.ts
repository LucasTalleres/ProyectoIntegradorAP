import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario.model';
import { TokenService } from 'src/app/service/token.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  public usuario: Usuario | undefined;
  public editarUsuario: Usuario | undefined;
  
  isLogged = false;

  constructor(private usuarioService: UsuarioService, private router:Router, private tokenService: TokenService) { }
  
  ngOnInit(): void {
    this.getUser();
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

  public getUser():void{
    this.usuarioService.getUser().subscribe({
      next: (response: Usuario) => {
        this.usuario=response;
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

  public onOpenModal(mode:String, usuario?: Usuario):void{
    const container=document.getElementById('main-container');
    const button=document.createElement('button');
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    console.log('OPEN MODAL')
    if(mode==='edit'){
      console.log('edit modal')
      this.editarUsuario=usuario;
      button.setAttribute('data-target','#editUsuarioModal');
    }
    container?.appendChild(button);
    button.click();
  }
  public onUpdateUsuario(usuario:Usuario){
    this.editarUsuario=usuario;
    document.getElementById('add-usuario-form')?.click();
    this.usuarioService.updateUsuario(usuario).subscribe({
      next:(response:Usuario) =>{
        console.log(response)
        this.getUser();
      },
      error:(error:HttpErrorResponse)=>{
        alert(error.message);
      }
    })
  }

}
