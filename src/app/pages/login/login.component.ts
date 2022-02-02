import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NbLoginComponent} from '@nebular/auth';
import {AuthenticationService} from '../../services/authentification/authentication.service';
import {NbAuthService} from '@nebular/auth/services/auth.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {map} from 'rxjs/operators';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class NgxLoginComponent implements OnInit {

  submitted: boolean = true;
  email: string;
  password: string;
  loginForm: FormGroup;

  errors = {
    wrongEmailOrPwd: null,
    other: null,
  };

  constructor(
    private authService: AuthenticationService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.minLength(6),
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;
    this.authService.login(this.loginForm.value).subscribe(
      data => {
        this.router.navigate(['pages']);
      },
      error => {
        console.log('error login: ', error);
        if (error.error.message === 'Unauthorized')
          this.errors['wrongEmailOrPwd'] = 'Wrong password or email !';
        else this.errors['other'] = 'Oups ! Some error has occured !';
      },
    );
  }
} // extends NbLoginComponent {}
