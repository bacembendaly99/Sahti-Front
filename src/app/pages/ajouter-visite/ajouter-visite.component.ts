import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'ngx-ajouter-visite',
  templateUrl: './ajouter-visite.component.html',
  styleUrls: ['./ajouter-visite.component.scss'],
})
export class AjouterVisiteComponent implements OnInit {
 date: Date;
  constructor(public datepipe: DatePipe) {
    this.date = new Date();
    this.datepipe.transform(this.date, 'yyyy-MM-dd');
  }

  ngOnInit(): void {
  }

}
