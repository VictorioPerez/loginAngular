import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private usuarios = [
    {email: "114146@gmail.com", contrasena:"43279764"}
  ]
  confirmacion:boolean = false;
  confirmacionLogin:boolean = false;

  login(email: string, contrasena: string): boolean {
    let usuario = this.usuarios.find(user => user.email === email && user.contrasena === contrasena);
    if (usuario) {
      this.confirmacion = true;
      return this.confirmacion
    }
    this.confirmacion = false
     return this.confirmacion;
  }
  mostrarHome(mostrar:boolean){
    this.confirmacion = mostrar
  }
  cerrarSesion(){
    this.confirmacionLogin = false
  }
  
}
