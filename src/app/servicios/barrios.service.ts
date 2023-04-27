import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BarriosService {

  constructor(private http: HttpClient) { }

  getBarrios() {
    return this.http.get('./assets/data/barrios.json');
  }
}
