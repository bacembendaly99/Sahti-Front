import { NgModule } from '@angular/core';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbInputModule,
  NbMenuModule, NbRadioModule,
} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { RegisterStep1Component } from './register/register-step1/register-step1.component';
import {FormsModule} from '@angular/forms';
import { RegisterStep2Component } from './register/register-step2/register-step2.component';
import { RegisterStep3Component } from './register/register-step3/register-step3.component';
import { RegisterStep4Component } from './register/register-step4/register-step4.component';




@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    FormsModule,
    NbAlertModule,
    NbInputModule,
    NbCheckboxModule,
    NbButtonModule,
    NbDatepickerModule,
    NbRadioModule,
  ],
    declarations: [
        PagesComponent,
        RegisterStep1Component,
        RegisterStep2Component,
        RegisterStep3Component,
        RegisterStep4Component,
    ],
  exports: [
    RegisterStep1Component,
    RegisterStep2Component,
    RegisterStep3Component,
    RegisterStep4Component,
  ],
})
export class PagesModule {
}
