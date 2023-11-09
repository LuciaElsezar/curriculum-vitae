import { Component, OnInit } from '@angular/core';
import { FormacionAcademicaService } from 'src/app/servicios/formacion-academica/formacion-academica.service';

@Component({
  selector: 'app-formacion-academica',
  templateUrl: './formacion-academica.component.html',
  styleUrls: ['./formacion-academica.component.css']
})
export class FormacionAcademicaComponent implements OnInit{
  formacionAcademica: any;

  constructor(private formacionAcademicaService: FormacionAcademicaService){

  }

  ngOnInit(){
    this.formacionAcademicaService.getFormacionAcademica().subscribe(
      {
        next: (data: any)=>{
        this.formacionAcademica = data["formacionAcademica"];
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
