import {Injectable} from '@angular/core';
import {Patient, Doctor, Pharmacist, Technician} from '../../pages/shared/models/user';
import {BehaviorSubject, Observable} from 'rxjs';
import {PagesComponent} from '../../pages/pages.component';

@Injectable({
  providedIn: 'root',
})
export class ManageAccountService {

  currentUser: Patient;
  patientView: boolean = false;
  doctorView: boolean = true;
  pharmacistView: boolean = true;
  technicianView: boolean = true;

  roles = [
    {
      value: 'patient',
      name: 'Patient',
    },
  ];

  constructor() {

    this.setCurrentUser();
    // console.log('current user', this.currentUser);
    this.setUpRoles();
    // console.log('roles : ', this.roles);
  }

  changeRole(newRole: string) {
    switch (newRole) {
      case 'patient':
        this.patientView = true;
        this.doctorView = false;
        this.pharmacistView = false;
        this.technicianView = false;
        break;
      case 'pharmacist':
        this.pharmacistView = !this.pharmacistView;
        break;
      case 'technician':
        this.technicianView = !this.technicianView;
        break;
      case 'doctor':
        this.doctorView = !this.doctorView;
        break;
    }
  }

  setCurrentUser() {
    this.currentUser = JSON.parse(localStorage.getItem('user'));
    // console.log('la ilah illa lah', user);
  }

  setUpRoles() {
    if (this.currentUser.role === 'Doctor') {
      this.roles.push({
        value: 'doctor',
        name: 'Doctor',
      });
      this.doctorView = !this.doctorView;
    }
    if (this.currentUser.role === 'Technician') {
      this.roles.push({
        value: 'technician',
        name: 'Technician',
      });
      this.technicianView = !this.technicianView;
    }
    if (this.currentUser.role === 'Pharmacist') {
      this.roles.push({
        value: 'pharmacist',
        name: 'Pharmacist',
      });
      this.pharmacistView = !this.pharmacistView;
    }
  }

  getRoles() {
    return this.roles;
  }

}
