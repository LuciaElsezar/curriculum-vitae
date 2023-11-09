import { Component, OnInit } from '@angular/core';
import { ExperienciaLaboralService } from 'src/app/servicios/experiencia-laboral/experiencia-laboral.service';

@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})
export class ExperienciaLaboralComponent implements OnInit{
  ExperienciaLaboral: any;

  constructor(private ExperienciaLaboralService: ExperienciaLaboralService){ }

  experienciaLaboral: any;

  ngOnInit(){
    this.ExperienciaLaboralService.getExperienciaLaboral().subscribe(
      {
        next: (data: any)=>{
        this.experienciaLaboral = data["experienciaLaboral"];
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

