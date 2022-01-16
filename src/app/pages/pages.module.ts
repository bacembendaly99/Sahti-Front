import { NgModule } from '@angular/core';
import {NbAlertModule, NbButtonModule, NbCheckboxModule, NbInputModule, NbMenuModule} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { RegisterStep1Component } from './register/register-step1/register-step1.component';
import {FormsModule} from '@angular/forms';



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
  ],
    declarations: [
        PagesComponent,
        RegisterStep1Component,
    ],
    exports: [
        RegisterStep1Component,
    ],
})
export class PagesModule {
}
