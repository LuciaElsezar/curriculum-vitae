import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaLaboralService {

  constructor(private http: HttpClient) { }

  getExperienciaLaboral():Observable<any>{
    return this.http.get('../../../assets/json/experienciaLaboral.json');
  }
}
