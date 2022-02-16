import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PharmacienService} from '../../services/pharmacien.service';

@Component({
  selector: 'ngx-valider-prescription-step2',
  templateUrl: './valider-prescription-step2.component.html',
  styleUrls: ['./valider-prescription-step2.component.scss'],
})
export class ValiderPrescriptionStep2Component implements OnInit {
Prescriptions: any;
// clicked: Array<boolean> = [];
  clicked: any;
Medicaments: any;
Pres_Number: number;
  constructor(private route: ActivatedRoute, private pharmacienService: PharmacienService) { }

  ngOnInit(): void {
    this.getPres(this.route.snapshot.paramMap.get('id'));
    this.clicked = new Array(10).fill(false);
    console.log(this.clicked);
  }
  getPres(id: any): void {
    this.pharmacienService.getPrescriptions(id)
      .subscribe(
        data => {
          this.Prescriptions = data;
          // console.log(this.clicked);
          // (this.clicked).fill(false, 1, 5);
          // console.log(this.clicked);
        },
        error => {
          console.log(error);
        });
  }
  check(id: any): void {
this.pharmacienService.checkPrescription(id).subscribe(
  data => {
    console.log(data);
  },
  error => {
    console.log(error);
  });
  }

}
