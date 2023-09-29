import { Component} from '@angular/core';
import { AutenticacionService } from '../autenticacion.service';
@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {


  constructor(public aut : AutenticacionService) {}
  comidas:any[] = [
    {
      imagen: "https://www.recetasnatura.com.ar/sites/default/files/styles/receta_cuerpo/public/655_x_475-_web_naturapolenta_con_salsa_bolonesa.jpg?itok=-26GC64A",
      nombre:"polenta"
    },
    {
      imagen: "https://www.recetasnatura.com.ar/sites/default/files/styles/receta_cuerpo/public/655_x_475-_web_naturapolenta_con_salsa_bolonesa.jpg?itok=-26GC64A",
      nombre:"FIDEOS"
    },
    {
      imagen: "https://www.recetasnatura.com.ar/sites/default/files/styles/receta_cuerpo/public/655_x_475-_web_naturapolenta_con_salsa_bolonesa.jpg?itok=-26GC64A",
      nombre: "Milanesa"
    },
    {
      imagen: "https://www.recetasnatura.com.ar/sites/default/files/styles/receta_cuerpo/public/655_x_475-_web_naturapolenta_con_salsa_bolonesa.jpg?itok=-26GC64A",
      nombre: "Milanesa"
    },
    {
      imagen: "https://www.recetasnatura.com.ar/sites/default/files/styles/receta_cuerpo/public/655_x_475-_web_naturapolenta_con_salsa_bolonesa.jpg?itok=-26GC64A",
      nombre: "Milanesa"
    },
    {
      imagen: "https://www.recetasnatura.com.ar/sites/default/files/styles/receta_cuerpo/public/655_x_475-_web_naturapolenta_con_salsa_bolonesa.jpg?itok=-26GC64A",
      nombre: "Milanesa"
    }
  ]

  eliminarComida(indice:number){
    this.comidas.splice(indice,1)
  }
  cerrarSesionEvent(){
    this.aut.confirmacion = false;
    this.aut.cerrarSesion(); 
  }


}
