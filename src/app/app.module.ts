/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { Part1HomeComponent } from './part1-home/part1-home.component';
import { Part2HomeComponent } from './part2-home/part2-home.component';
import { HomePageComponent } from './home-page/home-page.component';
import {ECommerceModule} from './pages/e-commerce/e-commerce.module';
import {DashboardModule} from './pages/dashboard/dashboard.module';


@NgModule({
  declarations: [AppComponent, HomeHeaderComponent, Part1HomeComponent, Part2HomeComponent, HomePageComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        NbSidebarModule.forRoot(),
        NbMenuModule.forRoot(),
        NbDatepickerModule.forRoot(),
        NbDialogModule.forRoot(),
        NbWindowModule.forRoot(),
        NbToastrModule.forRoot(),
        NbChatModule.forRoot({
            messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
        }),
        CoreModule.forRoot(),
        ThemeModule.forRoot(),
        ECommerceModule,
        DashboardModule,
    ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
