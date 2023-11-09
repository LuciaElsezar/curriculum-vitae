import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {

  constructor(private http: HttpClient) { }

  getHabilidades():Observable<any>{
    return this.http.get('../../../assets/json/habilidades.json');
  }
}
