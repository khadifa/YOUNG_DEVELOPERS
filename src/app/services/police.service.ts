import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PoliceService {

  constructor(private http:HttpClient) { }

  getPolice(){
    return this.http.get<any[]>("http://localhost:8080/Police");
  }
}
