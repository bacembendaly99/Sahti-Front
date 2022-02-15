import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Medicament} from '../shared/medicament.interface';
import {MedicalCheckup} from '../shared/medical-checkup.interface';


const DoctorUrl = 'http://localhost:4000/doctors';
const MedicamentsUrl = 'http://localhost:4000/medicaments';
const MedicalCheckupUrl = 'http://localhost:4000/medical-check-ups';




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
ajouterVisite(medC: MedicalCheckup): void {
this.http.post(`${MedicalCheckupUrl}`, medC).subscribe(
  data => {
    console.log(data);
  },
  error => {
    console.log(error);
  });

}



}
