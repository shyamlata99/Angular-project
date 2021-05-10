import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/emplogin/emplogin.component'; 
import { LandingpageComponent } from './login/landingpage/landingpage.component';
import { AdmindataComponent } from './login/admindata/admindata.component';
// import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
// import {EmpdashboardComponent} from './employee/empdashboard/empdashboard.component';
import {LoginModule} from './login/login.module';
import { EmployeeModule} from './employee/employee.module';
import { AdminModule} from './admin/admin.module';
// import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingpageComponent,
    AdmindataComponent,
    // UserDetailComponent,
    // AdminDashboardComponent,
    // EmpdashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginModule,
    EmployeeModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})


export class AppModule { 
  constructor(){
    console.log('App module loaded')
  }
}
