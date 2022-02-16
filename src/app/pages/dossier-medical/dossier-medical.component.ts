import {Component, OnInit} from '@angular/core';
import {Patient} from '../../shared/patient.interface';
import {ActivatedRoute} from '@angular/router';
import {PatientService} from '../../services/patient.service';
import {ManageAccountService} from '../../services/manage-account/manage-account.service';
import {NbIconLibraries} from '@nebular/theme';

@Component({
  selector: 'ngx-dossier-medical',
  templateUrl: './dossier-medical.component.html',
  styleUrls: ['./dossier-medical.component.scss'],
})
export class DossierMedicalComponent implements OnInit {
  selectedFolder: any;
  currentUser;
  evaIcons = [];

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private manageAccountService: ManageAccountService,
    private iconsLibrary: NbIconLibraries,
  ) {
    // this.currentUser = manageAccountService.currentUser;
    this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
      .filter(icon => icon.indexOf('outline') === -1);
  }

  ngOnInit(): void {
    this.patientService.getPatient(this.route.snapshot.paramMap.get('id')).subscribe(
      data => {
        this.currentUser = data;
        console.log(this.currentUser);
      },
      error => {
        console.log(error);
      });
    this.getMedicalRecord(this.route.snapshot.paramMap.get('id'));
  }

  getMedicalRecord(id: any) {
    this.patientService.getMedicalRecord(id).subscribe(
      data => {
        this.selectedFolder = data; // JSON.stringify(data);
        console.log(this.selectedFolder);
      },
      error => {
        console.log('error', error);
      });
  }
}
