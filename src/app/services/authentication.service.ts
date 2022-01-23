import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from '../@core/data/users';

export interface LoginForm {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  readonly URL = 'http://localhost:4000/auth';

  constructor(private http: HttpClient) {
  }

  login(loginForm: LoginForm) {
    return this.http.post<any>(
      this.URL + '/login',
      {
        'email': loginForm.email,
        'password': loginForm.password,
      }).pipe(map((token) => {
      localStorage.setItem('accessToken', token.accessToken);
      localStorage.setItem('refreshToken', token.refreshToken);
      return token;
    }));
  }

  register(user: any) {
    console.log('user from service:', user);

    if (user.hasOwnProperty('doctor')) user['patient']['role'] = 'Doctor';
    else if (user.hasOwnProperty('technician')) user['patient']['role'] = 'Technician';
    else if (user.hasOwnProperty('pharmacist')) user['patient']['role'] = 'Pharmacist';
    else user['patient']['role'] = 'Patient';

    delete user['patient'].repeatPassword;

    return this.http.post<any>(
      this.URL + '/create', user).subscribe((response: any) => {
      console.log('response', response);
    });
  }
}
// TODO: error handling view
