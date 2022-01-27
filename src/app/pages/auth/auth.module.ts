import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {NgxAuthRoutingModule} from './auth-routing.module';
import {NbAuthModule} from '@nebular/auth';
import {
  NbAlertModule,
  NbButtonModule, NbCardModule,
  NbCheckboxModule, NbDatepickerModule,
  NbInputModule,
} from '@nebular/theme';
import {NgxLoginComponent} from '../login/login.component';
import {NgxRegisterComponent} from '../register/register.component';
import {PagesModule} from '../pages.module';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {ResetPasswordComponent} from '../reset-password/reset-password.component';
import { ConfirmComponent } from './confirm/confirm.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,

    NbAuthModule,
    PagesModule,
    IvyCarouselModule,
    ReactiveFormsModule,
    NbDatepickerModule,
    NbCardModule,
  ],
  declarations: [
    NgxLoginComponent,
    NgxRegisterComponent,
    ResetPasswordComponent,
    ConfirmComponent,
  ],
})
export class NgxAuthModule {
}
