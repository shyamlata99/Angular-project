import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) { }

  //employee 
  public empDetails = [
    {
      empID : '10001',
      empName : 'Shyamlata Dubey' ,
      dept : 'Operations',
      mail : 'shyamlata@mail.com',
      psw : 'shyamlata'
    } ,
    {
      empID : '10002', 
      empName : 'Astha Ojha' ,
      dept : 'Marketing',
      mail : 'astha@mail.com',
      psw : 'astha'
    } ,
    {
      empID : '10003',
      empName : 'Sourav Tarafdar' ,
      dept : 'Operations',
      mail : 'sourav@mail.com',
      psw : 'sourav'
    } ,
    {
      empID : '10004',
      empName : 'Abhay Prakash' ,
      dept : 'Finance',
      mail : 'abhay@mail.com',
      psw : 'abhay'
    },
    {
      empID : '10005',
      empName : 'Asmita' ,
      dept : 'HR',
      mail : 'asmita@mail.com',
      psw : 'asmita'
    } 
   ];

   empLogin(userId, userEmail, userPass)
   {
     for(let i=0; i<this.empDetails.length; i++)
     {
       if(userId==this.empDetails[i].empID && userEmail==this.empDetails[i].mail && userPass==this.empDetails[i].psw)
       {
         localStorage.setItem("alluser",JSON.stringify(this.empDetails[i]));
       }
     }
     this.router.navigateByUrl('employeedashboard');
     return false;
   }





   //admin
  login(email,password)
  {
    if(email == 'adminemail' && password == 'adminpassword')
    {
      localStorage.setItem('adminEmail', ' authenticate ')
      return true
    }
    this.router.navigateByUrl('admindashboard')
    return false;         
  }

}
 