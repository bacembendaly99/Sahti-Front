import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
const PatientUrl = 'http://localhost:4000/patient';
const PrescripUrl = 'http://localhost:4000/transcriptions/by-patient';
const MedicalRecUrl = 'http://localhost:4000/medical-records/patient';
@Injectable({
  providedIn: 'root',
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getPatient(id: any): Observable<any> {
    return this.http.get(`${PatientUrl}/${id}`);
  }
  getPrescriptions(id: any): Observable<any> {
    return this.http.get(`${PrescripUrl}`, {params: {patientId: id}});
  }
  getMedicalRecord(id: any): Observable<any> {
    return this.http.get(`${MedicalRecUrl}/${id}`);
  }
}
