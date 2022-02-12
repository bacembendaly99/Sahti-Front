import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-valider-prescription',
  templateUrl: './valider-prescription.component.html',
  styleUrls: ['./valider-prescription.component.scss'],
})
export class ValiderPrescriptionComponent implements OnInit {
  id: number;
  public Valid = true;
  date: Date;
  constructor(public datepipe: DatePipe, private router: Router) {
    this.date = new Date();
    this.datepipe.transform(this.date, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.id);
    this.router.navigate(['pages/valider-prescription', this.id]);
  }
}
