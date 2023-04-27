import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Barrio } from '../models/barrio';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private readonly http: HttpClient) { }

  // get barrios from json file
  getBarrios(): Observable<Barrio[]> {
    return this.http.get<Barrio[]>('./assets/data/barrios.json');
  }
}
