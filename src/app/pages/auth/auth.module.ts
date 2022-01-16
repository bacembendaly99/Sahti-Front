import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule, NbDatepickerModule,
  NbInputModule,
} from '@nebular/theme';
import {NgxLoginComponent} from '../login/login.component';
import {NgxRegisterComponent} from '../register/register.component';
import {PagesModule} from '../pages.module';
import {IvyCarouselModule} from 'angular-responsive-carousel';


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
      NbDatepickerModule,
    ],
  declarations: [
    NgxLoginComponent,
    NgxRegisterComponent,
  ],
})
export class NgxAuthModule {
}
