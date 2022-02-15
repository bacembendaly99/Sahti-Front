import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PatientService} from '../../services/patient.service';
import {Patient} from '../../shared/patient.interface';
import {DoctorService} from '../../services/doctor.service';
import {Observable, of} from 'rxjs';
import {FormGroup, FormArray, FormBuilder} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';
import {MedicalCheckup} from '../../shared/medical-checkup.interface';
import {NbDialogService} from '@nebular/theme';


@Component({
  selector: 'ngx-ajouter-visite-step2',
  templateUrl: './ajouter-visite-step2.component.html',
  styleUrls: ['./ajouter-visite-step2.component.scss'],
})
export class AjouterVisiteStep2Component implements OnInit {

  optionMeds: string[];
  filteredMedOptions$: Observable<string[]>;
  medIndex: number = 0;
  selectedMeds: string[] = [];
  currentPatientID: number;
  currentPatient: Patient;
  allMeds: Observable<any>;
  visiteForm: FormGroup;
  medicalCheckup: MedicalCheckup = {
    medicamentNameList: [''],
    additionalInformation: '',
    doctorId: 0,
    patientId: 0,
    namesOfChronicDiseases: [
      '',
    ],
    controlDate: '',
    remarks: '',
  };

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private doctorService: DoctorService,
    private formBuilder: FormBuilder,
    private dialogService: NbDialogService,
  ) {
    this.visiteForm = this.formBuilder.group({
      meds: this.formBuilder.array([]),
      remarks: '',
      additionalInfo: '',
      chronicDisease: '',
      dateOfControl: '',
    });
  }

  ngOnInit(): void {
    this.getPatient(this.route.snapshot.paramMap.get('id'));
    this.getMeds();
    this.filteredMedOptions$ = of(this.optionMeds);
    this.filteredMedOptions$ = this.visiteForm.controls['meds'].valueChanges
      .pipe(
        startWith(''),
        map(filterString => this.filter(filterString)),
      );
  }

  private filter(value: string): string[] {
    if (value[this.medIndex] !== null) {
      let filterValue = '';
      if (value[this.medIndex] !== undefined) filterValue = value[this.medIndex]['med'].toLowerCase();
      return this.optionMeds.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
    } else return null;
  }

  getMeds(): void {
    this.doctorService.getMeds()
      .subscribe(
        data => {
          this.allMeds = data;
          this.fillMedsNames();
          console.log('all meds :', this.allMeds);
        },
        error => {
          console.log(error);
        });
  }

  fillMedsNames() {
    this.optionMeds = [];
    for (const med in this.allMeds) {
      if (med !== null) {
        this.optionMeds.push(this.allMeds[med]['name']);
      }
    }
  }

  changeMedIndex(index: number) {
    this.medIndex = index;
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

  medication(): FormArray {
    return this.visiteForm.get('meds') as FormArray;
  }

  newMed(): FormGroup {
    return this.formBuilder.group({
      med: '',
    });
  }

  addMed() {
    this.medication().push(this.newMed());
  }

  removeQuantity(i: number) {
    this.medication().removeAt(i);
  }

  transformMeds(): void {
    this.visiteForm.value.meds.forEach(item => {
      console.log('item:', item);
      this.selectedMeds.push(item.med);
    });
  }

  onSubmit(dialog): void {

    console.log('current patient id : ', this.currentPatientID);
    console.log('selected meds', this.selectedMeds);
    this.transformMeds();
    this.medicalCheckup.medicamentNameList = this.selectedMeds;
    this.medicalCheckup.additionalInformation = this.visiteForm.value.additionalInfo;
    this.medicalCheckup.doctorId = JSON.parse(localStorage.getItem('user')).id;
    this.medicalCheckup.patientId = this.currentPatientID;
    this.medicalCheckup.remarks = this.visiteForm.value.remarks;
    this.medicalCheckup.namesOfChronicDiseases.push(this.visiteForm.value.chronicDisease);
    this.medicalCheckup.namesOfChronicDiseases.shift();
    this.medicalCheckup.controlDate = this.visiteForm.value.dateOfControl;
    console.log('medical checkup: ', this.medicalCheckup);
    this.doctorService.ajouterVisite(this.medicalCheckup);

    this.dialogService.open(
      dialog,
      { context: 'Visite Ajoutee !' });
  }
}
