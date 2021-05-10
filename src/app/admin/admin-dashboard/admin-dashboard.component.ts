import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  public Details = JSON.parse(localStorage.getItem('alluser'));   //replaced alluser with currentUser
  // public name =[];
  public empName:string;
  public empId: number;
  public empDept: string;
  public manualEmail: string;
  public manualPass : string;
  public  data={};
  index=5;
  public isclicked=false;


  constructor(
     private router: Router
  ) { }

  ngOnInit(): void {
   
  }

  add(){
    this.data={empName:this.empName, empID:this.empId, dept:this.empDept, mail:this.manualEmail, psw:this.manualPass , index:this.index} 
    this.Details.push(this.data); 
    localStorage.removeItem('alluser');
    localStorage.setItem("Detail",JSON.stringify(this.Details));
    this.index++;
  }
delete(index){
  this.Details.splice(index,1);
  localStorage.removeItem('alluser');
  localStorage.setItem('Detail',JSON.stringify(this.Details));
}
edit(index){
  this.empName=this.Details[index].empName;
  this.empId=this.Details[index].empID;
  this.manualEmail=this.Details[index].mail;       
  this.empDept=this.Details[index].dept;        
  this.manualPass=this.Details[index].psw;
  this.isclicked=true;
  this.index=index;
  
}
update(index){
  this.data={empName:this.empName,empID:this.empId,dept:this.empDept,mail:this.manualEmail,psw:this.manualPass,index:this.index}
  this.Details[this.index]=this.data;
  localStorage.setItem("Detail",JSON.stringify(this.Details));

  }

userDetail(index) {
  this.router.navigate(['/admindashboard',this.Details[index].empID]);  
  localStorage.setItem('selectedUser',JSON.stringify(this.Details[index]));
}

  // submit(){

  //   let entry={
  //     Name:this.empName, 
  //     Id:this.empId,
  //     Dept:this.empDept,
  //     Email:this.manualEmail,
  //     Pass:this.manualPass
  //   };

  //    this.empName="";
  //    this.empDept="";
  //    this.manualEmail="";
  //    this.manualPass="";
  //    this.empId=null;
  //    this.data.push(entry);
  // }

  // delete(remove){
  //   this.data.splice(remove ,1);
  // }

}
