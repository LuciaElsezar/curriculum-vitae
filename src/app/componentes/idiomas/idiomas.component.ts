import { Component, OnInit } from '@angular/core';
import { IdiomasService } from 'src/app/servicios/idiomas/idiomas.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit{
  idiomas: any;

  constructor(private IdiomasService: IdiomasService){ }

  ngOnInit(){
    this.IdiomasService.getIdiomas().subscribe(
      {
        next: (data: any)=>{
        this.idiomas = data["idiomas"];
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