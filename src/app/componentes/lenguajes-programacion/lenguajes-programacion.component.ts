import { Component, OnInit } from '@angular/core';
import { LenguajesProgramacionService } from 'src/app/servicios/lenguajesProgramacion/lenguajes-programacion.service';

@Component({
  selector: 'app-lenguajes-programacion',
  templateUrl: './lenguajes-programacion.component.html',
  styleUrls: ['./lenguajes-programacion.component.css']
})
export class LenguajesProgramacionComponent implements OnInit{

  lenguajesProgramacion: any;

  constructor(private LenguajesProgramacionService: LenguajesProgramacionService){ }

  ngOnInit(): void {
    this.LenguajesProgramacionService.getLenguajesProgramacion().subscribe(
      {
        next: (data: any)=>{
        this.lenguajesProgramacion = data["lenguajesProgramacion"];
        console.log(data)
        },

        error:(err: any)=>{
          alert("Se ha producido un error. Por favor, intente nuevamente.");
          console.log(err)
        }
      }
    );
  }

}
