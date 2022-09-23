import { PoliceComponent } from './police/police.component';
import { InsurenceInformationComponent } from './insurence-information/insurence-information.component';
import { InsurenceFormComponent } from './insurence-form/insurence-form.component';
import { RoadFormComponent } from './road-form/road-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { MainlayoutComponent } from './layouts/mainlayout/mainlayout.component';

import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LicenceInformationComponent } from './licence-information/licence-information.component';
// import {Police-formComponent } from './police-form/police-form.Component'


const routes: Routes = [
  {
    path:"",component:LoginComponent
  },{
    path:"sign-up",component:SignUpComponent
  },{
    path:"nav",component:NavComponent,
    children:[
      {
        path:"",component:DashboardComponent
      },{
        path:"licence-information",component:LicenceInformationComponent
      },{
        path:"road-form",component:RoadFormComponent
      },{
        path:"insurence-form",component:InsurenceFormComponent
      },
      {
        path:'insure',component:InsurenceInformationComponent
      },

      {
        path:'police',component:PoliceComponent
      },

      // {
      //   // path:'police-form',Component:police-formComponent

      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
