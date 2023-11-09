import { Component, OnInit } from '@angular/core';
import { HabilidadesService } from 'src/app/servicios/habilidades/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit{
  habilidades: any;

  constructor(private HabilidadesService: HabilidadesService){ }

  ngOnInit(){
    this.HabilidadesService.getHabilidades().subscribe(
      {
        next: (data: any)=>{
        this.habilidades = data["habilidades"];
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