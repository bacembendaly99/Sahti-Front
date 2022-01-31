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

  errors = {
    usedEmailOrCIN: null,
    internalError: null,
    formDataError: null,
    success: null,
  };

  processUserData(user: any) {
    Object.assign(this.user.patient, user);
    this.errors = {
      usedEmailOrCIN: null,
      internalError: null,
      formDataError: null,
      success: null,
    };
    // console.log('user', this.user);
  }

  processRoleData(role: any) {
    Object.assign(this.user, role);
    // console.log('user', this.user);
  }

  register(message) {
    if (message === 'register') {
      this.authService.register(this.user).subscribe(
        data => {},
        error => {
          console.log('error : ', error);
          if (error.error.message.includes('Cin'))
            this.errors['usedEmailOrCIN'] = error.error.message;
          else {
            if (error.status === 0 || (error.status >= 400 && error.status < 500))
              this.errors['internalError'] = error.error.message;
            if (error.status === 500)
              this.errors['formDataError'] = error.error.message;
            if (error.success)
              this.errors['success'] = true;
          }
        },
      );
    }
  }
}
