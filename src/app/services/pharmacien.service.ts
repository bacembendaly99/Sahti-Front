import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const PharmacienUrl1 = 'http://localhost:4000/transcriptions/non-checked';
const PharmacienUrl2 = 'http://localhost:4000/transcriptions/check';
@Injectable({
  providedIn: 'root',
})
export class PharmacienService {

  constructor(private http: HttpClient) {
  }
  getPrescriptions(id: any ):  Observable<any> {
    return this.http.get(`${PharmacienUrl1}`, {params: {patientId: id}});
  }
  checkPrescription(id: any): Observable<any> {
    return this.http.post(`${PharmacienUrl2}/${id}`, {});
  }
}
