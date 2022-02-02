import { Component, OnInit } from '@angular/core';
import {Patient} from '../../shared/patient.interface';
import {ActivatedRoute} from '@angular/router';
import {PatientService} from '../../services/patient.service';

@Component({
  selector: 'ngx-dossier-medical',
  templateUrl: './dossier-medical.component.html',
  styleUrls: ['./dossier-medical.component.scss'],
})
export class DossierMedicalComponent implements OnInit {
  selectedFolder: any;
  constructor(private route: ActivatedRoute, private patientService: PatientService) { }

  ngOnInit(): void {
    this.getMedicalRecord(this.route.snapshot.paramMap.get('id'));
  }
  getMedicalRecord(id: any) {
    this.patientService.getMedicalRecord(id).subscribe(
      data => {
        this.selectedFolder = JSON.stringify(data);
        console.log(this.selectedFolder);
      },
      error => {
        console.log(error);
      });
  }
}
