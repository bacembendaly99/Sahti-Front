import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import {DoctorService} from '../../services/doctor.service';
import {take} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-ajouter-visite',
  templateUrl: './ajouter-visite.component.html',
  styleUrls: ['./ajouter-visite.component.scss'],
})
export class AjouterVisiteComponent implements OnInit {
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
   this.router.navigate(['pages/ajouter-visite', this.id]);
}
/*  onSubmit(): void {
    this.doctorService.getPatient(this.id).pipe(
      take(1),
    ).subscribe({
      next: (patient) => {
        this.ajouterValid = true;
        console.log(this.id);
        console.log(patient);


      },
      error: _ => this.ajouterValid = false,
    });
  }*/

}

