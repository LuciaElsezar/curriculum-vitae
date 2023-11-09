import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReferenciasService {

  constructor(private http: HttpClient) { }

  getReferencias():Observable<any>{
    return this.http.get('../../../assets/json/referencias.json');
  }
}