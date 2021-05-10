import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpdashboardComponent } from './empdashboard/empdashboard.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EmpdashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EmployeeModule {
  constructor(){
    console.log('Employee module loaded')
  }
  
 }
