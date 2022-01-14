import { Component} from '@angular/core';
import { NbRegisterComponent } from '@nebular/auth';

@Component({
  selector: 'ngx-register-step1',
  templateUrl: './register-step1.component.html',
  styleUrls: ['./register-step1.component.scss'],
})
export class RegisterStep1Component extends NbRegisterComponent {}
