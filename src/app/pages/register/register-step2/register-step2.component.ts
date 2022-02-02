import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../services/authentification/authentication.service';
import {Router} from '@angular/router';



@Component({
  selector: 'ngx-register-step2',
  templateUrl: './register-step2.component.html',
  styleUrls: ['./register-step2.component.scss'],
})
export class RegisterStep2Component implements OnInit {
  registerForm2: FormGroup;
  @Output() sendUserData = new EventEmitter();
  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.registerForm2 = this.formBuilder.group({
      cin: [null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern('[0-9]*'),
      ]],
      phoneNumber: [null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern('[0-9]*'),
      ]],
      birthday: [null, [
        Validators.required,
      ]],
      gender: [null, [
        Validators.required,
      ]],
    });
  }

  sendUserDataToParent(user: any) {
    this.sendUserData.emit(user);
  }


  onSubmit() {
    if (this.registerForm2.invalid) return;
    this.sendUserDataToParent(this.registerForm2.value);
  }

  get birthday() {
    return this.registerForm2.get('birthday');
  }


  get cin() {
    return this.registerForm2.get('cin');
  }


  get gender() {
    return this.registerForm2.get('gender');
  }

}

