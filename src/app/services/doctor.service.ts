import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


const DoctorUrl = 'http://localhost:4000/doctors';
const MedicamentsUrl = 'http://localhost:4000/medicaments';



@Injectable({
  providedIn: 'root',
})
export class DoctorService {

  constructor(private http: HttpClient) {
  }
  getDoctor(id: any): Observable<any> {
    return this.http.get(`${DoctorUrl}/${id}`);
  }
  getMeds(): Observable<any> {
    return this.http.get(`${MedicamentsUrl}`);
  }




}
