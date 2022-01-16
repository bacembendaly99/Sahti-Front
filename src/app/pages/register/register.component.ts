import {Component, OnInit} from '@angular/core';
import {NbRegisterComponent} from '@nebular/auth';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class NgxRegisterComponent {

  user: any = {};

  processUserData(user: any) {
    Object.assign(this.user, user);
    console.log('user', this.user);
  }
}// extends NbRegisterComponent {}
