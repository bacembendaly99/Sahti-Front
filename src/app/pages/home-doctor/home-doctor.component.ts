import {Component, OnInit} from '@angular/core';
import {DoctorService} from '../../services/doctor.service';
import {ActivatedRoute} from '@angular/router';
import {Doctor} from '../../shared/doctor.interface';
import {ButtonsComponent} from '../forms/buttons/buttons.component';

@Component({
  selector: 'ngx-home-doctor',
  templateUrl: './home-doctor.component.html',
  styleUrls: ['./home-doctor.component.scss'],
})
export class HomeDoctorComponent implements OnInit {
selectedDoctor: Doctor;


  constructor(private doctorService: DoctorService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getDoctor(this.route.snapshot.paramMap.get('id'));
  }
  getDoctor(id: any) {
    this.doctorService.getDoctor(id).subscribe(
      data => {
        this.selectedDoctor = data;
      },
      error => {
        console.log(error);
      });
  }
}
