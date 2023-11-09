import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LenguajesProgramacionService {

  constructor(private http: HttpClient) { }

  getLenguajesProgramacion():Observable<any>{
    return this.http.get('../../../assets/json/lenguajesProgramacion.json');
  }
}
