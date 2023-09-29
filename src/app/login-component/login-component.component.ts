import { Component } from '@angular/core';
import { AutenticacionService } from '../autenticacion.service';


@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent {
  inputMail:string = "";
  inputPass:string = "";
  constructor(public aut : AutenticacionService){}

  iniciarSesion(){
      let validar = this.aut.login(this.inputMail,this.inputPass)
      if(validar){
        alert("Inicio de sesion exitoso")
        this.aut.mostrarHome(true)
        this.aut.confirmacionLogin = true
      }
      else{
        alert("Email y/o contraseña invalidos")
        this.aut.mostrarHome(false)
        this.aut.confirmacionLogin = false
      }
  }





}
