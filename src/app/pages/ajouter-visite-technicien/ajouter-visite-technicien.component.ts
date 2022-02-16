import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-ajouter-visite-technicien',
  templateUrl: './ajouter-visite-technicien.component.html',
  styleUrls: ['./ajouter-visite-technicien.component.scss'],
})
export class AjouterVisiteTechnicienComponent implements OnInit {
  id: number;
  public ajouterValid = true;
  date: Date;
  constructor(public datepipe: DatePipe, private router: Router) {
    this.date = new Date();
    this.datepipe.transform(this.date, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
    console.log(this.id);
    this.router.navigate(['pages/ajouter-visite-technicien', this.id]);
  }
}
