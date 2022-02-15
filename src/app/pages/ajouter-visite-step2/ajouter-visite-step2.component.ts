import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PatientService} from '../../services/patient.service';
import {Patient} from '../../shared/patient.interface';
import {DoctorService} from '../../services/doctor.service';
import {Observable, of} from 'rxjs';
import {FormGroup, FormArray, FormBuilder} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'ngx-ajouter-visite-step2',
  templateUrl: './ajouter-visite-step2.component.html',
  styleUrls: ['./ajouter-visite-step2.component.scss'],
})
export class AjouterVisiteStep2Component implements OnInit {

  optionMeds: string[];
  filteredMedOptions$: Observable<string[]>;
  currentPatientID: number;
  currentPatient: Patient;
  allMeds: Observable<any>;
  visiteForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private doctorService: DoctorService,
    private formBuilder: FormBuilder,
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
    if (value[0] !== null) {
      let filterValue = '';
      if (value[0] !== undefined) filterValue = value[0]['med'].toLowerCase();
      return this.optionMeds.filter(optionValue => optionValue.toLowerCase().includes(filterValue));
    } else return null;
  }

  getMeds(): void {
    this.doctorService.getMeds()
      .subscribe(
        data => {
          this.allMeds = data;
          this.fillMedsNames();
          console.log(this.allMeds);
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
  mapMedicamentsToIds()
{
  const meds = this.visiteForm.value.meds;
  for (const med of meds) {
  }
}
  onSubmit(): void {
    console.log(this.currentPatientID);
    console.log(this.visiteForm.value);
  }
}
