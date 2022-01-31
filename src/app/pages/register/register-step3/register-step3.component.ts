import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NbRegisterComponent} from '@nebular/auth';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../services/authentification/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-register-step3',
  templateUrl: './register-step3.component.html',
  styleUrls: ['./register-step3.component.scss'],
})
export class RegisterStep3Component implements OnInit {
  registerForm3: FormGroup;
  selectedCivil = 'Married';
  civilStatusItems = [
    {
      value: 'Married',
      name: 'married',
    }, {
      value: 'Single',
      name: 'single',
    }, {
      value: 'Widowed',
      name: 'widowed',
    }, {
      value: 'Dead',
      name: 'dead',
    },
  ];
  socialStatusItems = [
    'working',
  ];
  @Output() sendUserData = new EventEmitter();

  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.registerForm3 = this.formBuilder.group({
      cnamId: [null, [
        Validators.required,
        // Validators.minLength(8),
        // Validators.maxLength(8),
      ]],
      civilStatus: [null, [
        Validators.required,
      ]],
      socialStatus: [null, [
        Validators.required,
      ]],
    });
  }

  sendUserDataToParent(user: any) {
    if (user.cnamId !== null || user.cnamId !== '') {
      user.cnamId = parseInt(user.cnamId, 10);
    }
    this.sendUserData.emit(user);
  }


  onSubmit() {
    if (this.registerForm3.invalid) return;
    this.sendUserDataToParent(this.registerForm3.value);
  }

}
