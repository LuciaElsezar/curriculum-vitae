import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdiomasService {

  constructor(private http: HttpClient) { }

  getIdiomas():Observable<any>{
    return this.http.get('../../../assets/json/idiomas.json');
  }
}