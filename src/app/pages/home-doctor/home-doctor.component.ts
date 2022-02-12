import {Component, OnInit} from '@angular/core';
import {DoctorService} from '../../services/doctor.service';
import {ActivatedRoute} from '@angular/router';
import {Doctor} from '../../shared/doctor.interface';
import {ButtonsComponent} from '../forms/buttons/buttons.component';
import {NbIconLibraries} from '@nebular/theme';

@Component({
  selector: 'ngx-home-doctor',
  templateUrl: './home-doctor.component.html',
  styleUrls: ['./home-doctor.component.scss'],
})
export class HomeDoctorComponent implements OnInit {
selectedDoctor: Doctor;


  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    iconsLibrary: NbIconLibraries) {
    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
  }

  ngOnInit(): void {
    this.getDoctor(this.route.snapshot.paramMap.get('id'));
  }
  getDoctor(id: any) {
    this.doctorService.getDoctor(id).subscribe(
      data => {
        this.selectedDoctor = data;
        console.log('doctor: ', this.selectedDoctor);
      },
      error => {
        console.log(error);
      });
  }
}
