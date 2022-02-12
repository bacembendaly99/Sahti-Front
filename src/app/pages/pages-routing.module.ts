import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ECommerceComponent} from './e-commerce/e-commerce.component';
import {NotFoundComponent} from './miscellaneous/not-found/not-found.component';
import {HomeDoctorComponent} from './home-doctor/home-doctor.component';
import {AjouterVisiteComponent} from './ajouter-visite/ajouter-visite.component';
import {HistoriqueDocteurComponent} from './historique-docteur/historique-docteur.component';
import {HomePatientComponent} from './home-patient/home-patient.component';
import {DossierMedicalComponent} from './dossier-medical/dossier-medical.component';
import {PrescriptionsComponent} from './prescriptions/prescriptions.component';
import {ValiderPrescriptionComponent} from './valider-prescription/valider-prescription.component';
import {AjouterVisiteTechnicienComponent} from './ajouter-visite-technicien/ajouter-visite-technicien.component';
import {AjouterVisiteStep2Component} from './ajouter-visite-step2/ajouter-visite-step2.component';
import {ValiderPrescriptionStep2Component} from './valider-prescription-step2/valider-prescription-step2.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'ajouter-visite-technicien',
      component: AjouterVisiteTechnicienComponent,
    },
    {
      path: 'valider-prescription',
      component: ValiderPrescriptionComponent,
    },
    {
      path: 'valider-prescription/:id',
      component: ValiderPrescriptionStep2Component,
    },
    {
      path: 'prescriptions/:id',
      component: PrescriptionsComponent,
    },
    {
      path: 'dossier-medical/:id',
      component: DossierMedicalComponent,
    },
    {
      path: 'home-patient/:id',
      component: HomePatientComponent,
    },
    {
      path: 'home-doctor/:id',
      component: HomeDoctorComponent,
    },
    {
      path: 'ajouter-visite',
      component: AjouterVisiteComponent,
    },
    {
      path: 'ajouter-visite/:id',
      component: AjouterVisiteStep2Component,
    },
    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
