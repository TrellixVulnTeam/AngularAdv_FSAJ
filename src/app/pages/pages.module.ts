import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
//import { AppRoutingModule } from '../app-routing.module';
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [

    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
   // AppRoutingModule puedo usar  este componente para extraer el Routermodule o hacerlo directamente con el routermodule
   RouterModule,
   FormsModule,
   ComponentsModule
  ],
  exports:
  [
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    DashboardComponent,
  ]
})
export class PagesModule { }
