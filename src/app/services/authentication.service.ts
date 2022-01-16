import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

export interface LoginForm {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  constructor(private http: HttpClient) {
  }

  login(loginForm: LoginForm) {
    return this.http.post<any>(
      'http://localhost:4000/auth/login',
      {
        'email': loginForm.email,
        'password': loginForm.password,
      }).pipe(map((token) => {
        localStorage.setItem('accessToken', token.accessToken);
        localStorage.setItem('refreshToken', token.refreshToken);
        return token;
    }));
  }
}
