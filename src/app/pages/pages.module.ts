import { NgModule } from '@angular/core';
import {
  NbAlertModule,
  NbButtonModule, NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbMenuModule, NbRadioModule, NbSelectModule,
} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { RegisterStep1Component } from './register/register-step1/register-step1.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterStep2Component } from './register/register-step2/register-step2.component';
import { RegisterStep3Component } from './register/register-step3/register-step3.component';
import { RegisterStep4Component } from './register/register-step4/register-step4.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AjouterVisiteComponent } from './ajouter-visite/ajouter-visite.component';
import { HomeDoctorComponent } from './home-doctor/home-doctor.component';
import { HistoriqueDocteurComponent } from './historique-docteur/historique-docteur.component';
import {TablesModule} from './tables/tables.module';
import { HomePatientComponent } from './home-patient/home-patient.component';
import { DossierMedicalComponent } from './dossier-medical/dossier-medical.component';
import { PrescriptionsComponent } from './prescriptions/prescriptions.component';
import { ValiderPrescriptionComponent } from './valider-prescription/valider-prescription.component';
import { AjouterVisiteTechnicienComponent } from './ajouter-visite-technicien/ajouter-visite-technicien.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { AjouterVisiteStep2Component } from './ajouter-visite-step2/ajouter-visite-step2.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


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
    ReactiveFormsModule,
    NbCardModule,
    TablesModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    NbIconModule,
    MatAutocompleteModule,
    NbSelectModule,
  ],
  declarations: [
    PagesComponent,
    RegisterStep1Component,
    RegisterStep2Component,
    RegisterStep3Component,
    RegisterStep4Component,
    AjouterVisiteComponent,
    HomeDoctorComponent,
    HistoriqueDocteurComponent,
    HomePatientComponent,
    DossierMedicalComponent,
    PrescriptionsComponent,
        ValiderPrescriptionComponent,
        AjouterVisiteTechnicienComponent,
        AjouterVisiteStep2Component,

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
