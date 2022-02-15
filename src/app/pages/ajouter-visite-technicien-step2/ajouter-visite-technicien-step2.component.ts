import { Component, OnInit } from '@angular/core';
import {Patient} from '../../shared/patient.interface';
import {ActivatedRoute} from '@angular/router';
import {PatientService} from '../../services/patient.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'ngx-ajouter-visite-technicien-step2',
  templateUrl: './ajouter-visite-technicien-step2.component.html',
  styleUrls: ['./ajouter-visite-technicien-step2.component.scss'],
})
export class AjouterVisiteTechnicienStep2Component implements OnInit {
  currentPatient: Patient;
  currentPatientID: number;
  visiteTForm: FormGroup;
  constructor(    private route: ActivatedRoute,
                  private patientService: PatientService, private formBuilder: FormBuilder) {
    this.visiteTForm = this.formBuilder.group({
      title: '',
      additionalInfo: '',
    });
  }

  ngOnInit(): void {
    this.getPatient(this.route.snapshot.paramMap.get('id'));
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

  onSubmit() {

  }
}
