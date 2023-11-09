import { Component, OnInit } from '@angular/core';
import { ReferenciasService } from 'src/app/servicios/referencias/referencias.service';

@Component({
  selector: 'app-referencias',
  templateUrl: './referencias.component.html',
  styleUrls: ['./referencias.component.css']
})
export class ReferenciasComponent implements OnInit{
  referencias: any;

  constructor(private ReferenciasService: ReferenciasService){ }

  ngOnInit(){
    this.ReferenciasService.getReferencias().subscribe(
      {
        next: (data: any)=>{
        this.referencias = data["referencias"];
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