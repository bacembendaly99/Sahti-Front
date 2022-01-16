import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'ngx-register-step1',
  templateUrl: './register-step1.component.html',
  styleUrls: ['./register-step1.component.scss'],
})
export class RegisterStep1Component implements OnInit {
  registerForm: FormGroup;
  @Output() sendUserData = new EventEmitter();
  constructor(
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [
        Validators.required,
        Validators.email,
      ]],
      password: [null, [
        Validators.required,
        Validators.minLength(6),
      ]],
      repeatPassword: [null, [
        Validators.required,
        Validators.minLength(6),
      ]],
    });
  }

  sendUserDataToParent(user: any) {
    this.sendUserData.emit(user);
  }

  onSubmit() {
    if (this.registerForm.invalid) return;
    this.sendUserDataToParent(this.registerForm.value);
  }
}// extends NbRegisterComponent {}
