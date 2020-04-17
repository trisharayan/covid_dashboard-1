import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CountryComponent } from './country/country.component';


const routes: Routes = [

{path:"",component:DashboardComponent},
{path:"home",component:DashboardComponent},
{path:"USA",component:CountryComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
