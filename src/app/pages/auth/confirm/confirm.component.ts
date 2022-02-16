import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from '../../../services/authentification/authentication.service';

@Component({
  selector: 'ngx-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss'],
})
export class ConfirmComponent implements OnInit {

  token: string;

  errors = {
    'alreadyConfirmed': null,
    'internalError': null,
  };

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private authentificationService: AuthenticationService,
    private router: Router,
  ) {
    this.route.params.subscribe(params => this.token = params['token']);
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authentificationService.confirmEmail(this.token).subscribe(
      data => {
        this.router.navigate(['auth', 'login']);
      }, response => {
        if (response.status === 400) this.errors['alreadyConfirmed'] = response.error.message;
        else this.errors['internalError'] = response.error.message;
        // console.log('error', response);
      },
    );
  }
}
