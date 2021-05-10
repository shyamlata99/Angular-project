import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormsModule } from '@angular/forms';
import { UserDetailsComponent } from './user-details/user-details.component';
// import { NewadmindashboardComponent } from './newadmindashboard/newadmindashboard.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    UserDetailsComponent,
    // NewadmindashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AdminModule {
  constructor(){
    console.log('Admin module loaded')
  }
 }
