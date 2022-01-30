import { Component, OnInit } from '@angular/core';
import {Patient} from '../../shared/patient.interface';

@Component({
  selector: 'ngx-dossier-medical',
  templateUrl: './dossier-medical.component.html',
  styleUrls: ['./dossier-medical.component.scss'],
})
export class DossierMedicalComponent implements OnInit {
  selectedFolder: Patient;
  selected: Patient;
  constructor() { }

  ngOnInit(): void {
  }

}
