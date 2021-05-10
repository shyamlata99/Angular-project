import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindataComponent } from './login/admindata/admindata.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { LandingpageComponent } from './login/landingpage/landingpage.component';
import { LoginComponent } from './login/emplogin/emplogin.component';
import {UserDetailsComponent } from './admin/user-details/user-details.component';
import { EmpdashboardComponent } from './employee/empdashboard/empdashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminauthGuard } from './employee/adminauth.guard';

const routes: Routes = [ 
{
  path:'admindashboard' , component: AdminDashboardComponent,canActivate:[AuthGuard]        //AdminDashboard
},
// {
//   path:'employee' , loadChildren:'./employee#EmployeeModule'   //EmployeeDashboard
// },
{
  path:'employeedashboard' , component: EmpdashboardComponent,   //EmployeeDashboard
},
{
  path:'emppage' , component: LoginComponent    //EmployeeLoginPage
},
{
  path:'' , component: LandingpageComponent   //EmployeeLoginPage
},
{
  path:'landingpage' , component: LandingpageComponent      //MainLandingPage
},
{
  path:'adminpage' , component: AdmindataComponent           //AdminLoginPage   
},
{
  path:'admindashboard/:user' , component: UserDetailsComponent   //newAdminDashboard after clicking on row
    
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
