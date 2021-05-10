import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './emplogin.component.html',  
  styleUrls: ['./emplogin.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService:AuthService,
    private router:Router
  ) { }

    public userId : any ;
    public userEmail : any;
    public userPass : any;
    // public details ;
    // public arr =[null];
   
    

  // empLogin() {
  //   // if(localStorage.getItem('empDetails'))
    
  // //   this.details = JSON.parse(localStorage.getItem('Details'));
  // //   for (let i=0;i<this.details.length;i++) { 
  // //     for(this.details[i].mail==this.userEmail && this.details[i].psw==this.userPass && this.details[i].empID==this.userId) {
  // //       console.log("valid");
  // //     }
  // //  }
  // //   this.arr = this.details;
  // //   for(let i=0 ; i<this.details.length ; i++) {
  // //     if(this.userEmail==this.details[i].mail && this.userPass == this.details[i].psw) {
  // //       console.log("Valid");
  // //     }
  // //     else
  // //     console.log("Invalid");
  // //   }

  // //   console.log(this.details);

  // }

  ngOnInit(): void {
  }
  empLogin(){
    if(this.authService.empLogin(this.userId, this.userEmail, this.userPass))
    {
        this.router.navigateByUrl('employeedashboard');
    }

  }

}
