import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PatientService} from '../../services/patient.service';
import {Patient} from '../../shared/patient.interface';
import { DoctorService } from '../../services/doctor.service';
import {Observable} from 'rxjs';



@Component({
  selector: 'ngx-ajouter-visite-step2',
  templateUrl: './ajouter-visite-step2.component.html',
  styleUrls: ['./ajouter-visite-step2.component.scss'],
})
export class AjouterVisiteStep2Component implements OnInit {




  chronicDisease: string;
  currentPatientID: number;
  currentPatient: Patient;
  remarks: string;
  allMeds: Observable<any>;
  additionalInfo: string;
  constructor(private route: ActivatedRoute, private patientService: PatientService,
              private  doctorService: DoctorService) {

  }
  ngOnInit(): void {
    this.getPatient(this.route.snapshot.paramMap.get('id'));
    this.getMeds();
  }

  getMeds(): void {
    this.doctorService.getMeds()
      .subscribe(
        data => {
          this.allMeds = data;
          console.log(this.allMeds);
        },
        error => {
          console.log(error);
        });
  }
getPatient(id: any): void {
  this.patientService.getPatient(id)
    .subscribe(
      data => {
        this.currentPatient = data;
        console.log(this.currentPatient);
        this.currentPatientID = id;
      },
      error => {
        console.log(error);
      });
}
  onSubmit(): void {
    console.log(this.additionalInfo);
    console.log(this.currentPatientID);
    console.log(this.remarks);

  }
}
