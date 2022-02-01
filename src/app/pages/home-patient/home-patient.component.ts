import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PatientService} from '../../services/patient.service';
import {Patient} from '../../shared/patient.interface';

@Component({
  selector: 'ngx-home-patient',
  templateUrl: './home-patient.component.html',
  styleUrls: ['./home-patient.component.scss'],
})
export class HomePatientComponent implements OnInit {
  selectedPatient: Patient;

  constructor(private patientService: PatientService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPatient(this.route.snapshot.paramMap.get('id'));
  }
  getPatient(id: any) {
    this.patientService.getPatient(id).subscribe(
      data => {
        this.selectedPatient = data;
      },
      error => {
        console.log(error);
      });
  }
}
