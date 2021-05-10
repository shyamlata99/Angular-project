import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empdashboard',
  templateUrl: './empdashboard.component.html',
  styleUrls: ['./empdashboard.component.css']
})
export class EmpdashboardComponent implements OnInit {

  public empDetail=JSON.parse(localStorage.getItem("Details"));
  public curDetail=JSON.parse(localStorage.getItem("curUser"));
  public index=JSON.parse(localStorage.getItem('index'));

  public Name = this.curDetail.empName;  
  public ID = this.curDetail.empID;
  public Department = this.curDetail.dept;
  public Email = this.curDetail.mail;
  public Password = this.curDetail.psw; 
 
  public editDetail = {};
  public isClicked=false;
  

  constructor() { }

  ngOnInit(): void {
  }

  edit(){
    this.isClicked=true;
    this.Name=this.curDetail.empName;
    this.ID=this.curDetail.empID;
    this.Email=this.curDetail.mail;       
    this.Department=this.curDetail.dept;        
    this.Password=this.curDetail.psw;
  }


  update(){
    this.editDetail={empName:this.Name,empID:this.ID,dept:this.Department,mail:this.Email,psw:this.Password,index:this.index};
    this.empDetail[this.index]=this.editDetail;    
    localStorage.setItem("Details",JSON.stringify(this.empDetail));
    this.isClicked=false;
    }

}
