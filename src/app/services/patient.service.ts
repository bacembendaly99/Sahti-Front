import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
const PatientUrl = 'http://localhost:4000/patient';
@Injectable({
  providedIn: 'root',
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getPatient(id: any): Observable<any> {
    return this.http.get(`${PatientUrl}/${id}`);
  }
}
