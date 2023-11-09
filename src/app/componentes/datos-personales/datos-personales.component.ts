import { Component, OnInit } from '@angular/core';
import { DatosPersonalesService } from 'src/app/servicios/datos-personales/datos-personales.service';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent {
  datosPersonales: any;

  constructor(private datosPersonalesService: DatosPersonalesService){
    
  }
  ngOnInit(){
    this.datosPersonalesService.getDatosPersonales().subscribe(
      {
        next: (data: any)=>{
        this.datosPersonales = data["datosPersonales"];
        },

        error:(err: any)=>{
          alert("Se ha producido un error. Por favor, intente nuevamente.");
          console.log(err)
        }
      }
    );
  }

}
