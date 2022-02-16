import { Component, OnInit } from '@angular/core';
import {Patient} from '../../shared/patient.interface';
import {ActivatedRoute} from '@angular/router';
import {PatientService} from '../../services/patient.service';

@Component({
  selector: 'ngx-prescriptions',
  templateUrl: './prescriptions.component.html',
  styleUrls: ['./prescriptions.component.scss'],
})
export class PrescriptionsComponent implements OnInit {
  prescriptions: any ;

  constructor(private route: ActivatedRoute, private patientService: PatientService) {}

  ngOnInit(): void {
    this.getPrescriptions(this.route.snapshot.paramMap.get('id'));
  }
  getPrescriptions(id: any) {
    this.patientService.getPrescriptions(id).subscribe(
      data => {
        this.prescriptions = data;
        console.log(this.prescriptions);
      },
      error => {
        console.log(error);
      });
  }
}
