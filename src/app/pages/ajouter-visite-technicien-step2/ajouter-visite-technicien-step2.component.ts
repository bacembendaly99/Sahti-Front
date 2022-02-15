import {Component, OnInit} from '@angular/core';
import {Patient} from '../../shared/patient.interface';
import {ActivatedRoute} from '@angular/router';
import {PatientService} from '../../services/patient.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {NbIconLibraries} from '@nebular/theme';
import {MedicalCheckup} from "../../shared/medical-checkup.interface";
import {TechnicalCheckup} from "../../shared/technical-checkup.interface";
import {TechnicienService} from "../../services/technicien.service";

@Component({
  selector: 'ngx-ajouter-visite-technicien-step2',
  templateUrl: './ajouter-visite-technicien-step2.component.html',
  styleUrls: ['./ajouter-visite-technicien-step2.component.scss'],
})
export class AjouterVisiteTechnicienStep2Component implements OnInit {
  currentPatient: Patient;
  currentPatientID: number;
  visiteTForm: FormGroup;
  evaIcons = [];
  technicalCheckup: TechnicalCheckup = {
    additionalInformation: '',
    title: '',
    technicalFiles: null,
    doctorId: 0,
    patientId: 0,
  };

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private formBuilder: FormBuilder,
    iconsLibrary: NbIconLibraries,
    private technicanService: TechnicienService,
  ) {
    this.visiteTForm = this.formBuilder.group({
      title: '',
      additionalInfo: '',
    });
    this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
      .filter(icon => icon.indexOf('outline') === -1);
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

  files: any[] = [];

  /**
   * on file drop handler
   */
  onFileDropped($event) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    this.prepareFilesList(files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    // this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes, decimals) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  onSubmit() {
this.technicalCheckup.technicalFiles = this.files[0];
this.technicalCheckup.additionalInformation = this.visiteTForm.value.additionalInfo;
this.technicalCheckup.title = this.visiteTForm.value.title;
    this.technicalCheckup.doctorId = JSON.parse(localStorage.getItem('user')).id;
    this.technicalCheckup.patientId = this.currentPatientID;
    this.technicanService.ajouterTVisite(this.technicalCheckup);
    console.log(this.technicalCheckup);

  }
}
