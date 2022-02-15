import {Injectable} from '@angular/core';
import {MedicalCheckup} from '../shared/medical-checkup.interface';
import {HttpClient} from "@angular/common/http";
import {TechnicalCheckup} from "../shared/technical-checkup.interface";


const TechnicalCheckupUrl = 'http://localhost:4000/technical-check-up';

@Injectable({
  providedIn: 'root',
})
export class TechnicienService {
  authorization: string;

  constructor(private http: HttpClient) {
  }


  ajouterTVisite(medC: TechnicalCheckup): void {
    this.authorization = 'Bearer ' + localStorage.getItem('accessToken');

    console.log('autho', this.authorization);
    this.http.post(`${TechnicalCheckupUrl}`, medC).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

}
