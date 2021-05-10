import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-admindata',
  templateUrl: './admindata.component.html',
  styleUrls: ['./admindata.component.css']
})
export class AdmindataComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private router:Router
    ){ }

  empDetails=this.authService.empDetails;
  public adminEmail : any;
  public adminPass : any;

  ngOnInit(): void {
  }

    login()
    {
     console.log('check');
     if(this.authService.login(this.adminEmail, this.adminPass))
     {
       localStorage.setItem('Details',JSON.stringify(this.empDetails))   
       this.router.navigateByUrl('admindashboard')
     }
    }
  
}
