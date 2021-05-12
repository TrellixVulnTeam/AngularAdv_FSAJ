import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';


import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { AuthRoutingModule } from './auth/auth.routing';






const routes: Routes = [



  {path : '', redirectTo: '/dashboar',pathMatch: 'full'},
  {path : '**', component: NopagefoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes) ,
    //tutas hijas en el modulo de pages
      PagesRoutingModule,
       //tutas hijas en el modulo auth
      AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
