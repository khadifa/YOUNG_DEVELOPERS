import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MainlayoutComponent } from './layouts/mainlayout/mainlayout.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RoadFormComponent } from './road-form/road-form.component';
import { InsurenceFormComponent } from './insurence-form/insurence-form.component';
import { InsurenceInformationComponent } from './insurence-information/insurence-information.component';
import { LicenceInformationComponent } from './licence-information/licence-information.component';
import { PoliceComponent } from './police/police.component';
import { PoliceFormComponent } from './police-form/police-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    MainlayoutComponent,
    NavComponent,
    DashboardComponent,
    RoadFormComponent,
    InsurenceFormComponent,
    InsurenceInformationComponent,
    LicenceInformationComponent,
    PoliceComponent,
    PoliceFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
