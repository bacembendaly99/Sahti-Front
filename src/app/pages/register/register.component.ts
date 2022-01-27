import {Component, OnInit} from '@angular/core';
import {NbRegisterComponent} from '@nebular/auth';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentification/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class NgxRegisterComponent {

  constructor(private authService: AuthenticationService) {
  }

  user: any = {
    'patient': {},
  };

  processUserData(user: any) {
    Object.assign(this.user.patient, user);
    console.log('user', this.user);
  }
  processRoleData(role: any) {
    Object.assign(this.user, role);
    console.log('user', this.user);
  }

  register(message) {
    if (message === 'register') {
      this.authService.register(this.user);
    }
  }
}
