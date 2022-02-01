import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PatientService} from '../../services/patient.service';
import {Patient} from '../../shared/patient.interface';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import {Medicament} from '../../shared/medicament.interface';
import {MedicalCheckup} from '../../shared/medical-checkup.interface';
import {FormControl} from '@angular/forms';
import { DoctorService } from '../../services/doctor.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatAutocomplete, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';

@Component({
  selector: 'ngx-ajouter-visite-step2',
  templateUrl: './ajouter-visite-step2.component.html',
  styleUrls: ['./ajouter-visite-step2.component.scss'],
})
export class AjouterVisiteStep2Component implements OnInit {
  chronicDisease: string;
  currentPatientID: number;
  currentPatient: Patient;
  // addOnBlur = true;
  // readonly separatorKeysCodes = [ENTER, COMMA] as const;
  // medicaments: Medicament[] = [];
  remarks: string;
  allMeds: Observable<any>;
  additionalInfo: string;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  medicamentCtrl = new FormControl();
  filteredMeds: Observable<string[]>;
  medicaments: string[] = ['Lemon'];
  allMedicaments: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];
  @ViewChild('medicamentInput', {static: false}) medicamentInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto', {static: false}) matAutocomplete: MatAutocomplete;
  constructor(private route: ActivatedRoute, private patientService: PatientService,
              private  doctorService: DoctorService) {

    this.filteredMeds = this.medicamentCtrl.valueChanges.pipe(
      startWith(null),
      map((medicament: string | null) => medicament ? this._filter(medicament) : this.allMedicaments.slice()));
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allMedicaments.filter(medicament => medicament.toLowerCase().indexOf(filterValue) === 0);
  }
  add(event: MatChipInputEvent): void {
    // Add medicament only when MatAutocomplete is not open
    // To make sure this does not conflict with OptionSelected Event
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our medicament
      if ((value || '').trim()) {
        this.medicaments.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.medicamentCtrl.setValue(null);
    }
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    this.medicaments.push(event.option.viewValue);
    this.medicamentInput.nativeElement.value = '';
    this.medicamentCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.medicaments.indexOf(fruit);

    if (index >= 0) {
      this.medicaments.splice(index, 1);
    }
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
  // add(event: MatChipInputEvent): void {
  //   const value = (event.value || '').trim();
  //
  //   // Add our medicament
  //   if (value) {
  //     this.medicaments.push({name: value});
  //   }
  //
  //   // Clear the input value
  //  /* event.chipInput!.clear();*/
  // }
  //
  // remove(medicament: Medicament): void {
  //   const index = this.medicaments.indexOf(medicament);
  //
  //   if (index >= 0) {
  //     this.medicaments.splice(index, 1);
  //   }
  // }
  onSubmit(): void {
    console.log(this.medicaments);
    console.log(this.additionalInfo);
    console.log(this.currentPatientID);
    console.log(this.remarks);

  }
}
